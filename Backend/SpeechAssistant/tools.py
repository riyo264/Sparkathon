import logging
from livekit.agents import function_tool, RunContext
import requests
from livekit import agents
from langchain_community.tools import DuckDuckGoSearchRun
import json
from memory import MemoryStore


# Dummy JSON data simulating an E-Commerce Product Catalog
dummy_product_data = [
    {"id": 1, "name": "Wireless Headphones", "description": "Noise cancelling over-ear headphones", "price": 30},
    {"id": 2, "name": "Smartphone Case", "description": "Durable protective phone case", "price": 34},
    {"id": 3, "name": "Bluetooth Speaker", "description": "Portable speaker with high quality sound", "price": 20},
    {"id": 4, "name": "Running Shoes", "description": "Comfortable shoes for running and sports", "price": 23},
    {"id": 5, "name": "Smart Watch", "description": "Track your fitness and notifications", "price": 55},
    {"id": 6, "name": "Laptop Backpack", "description": "Waterproof and durable laptop backpack", "price": 43},
    {"id": 7, "name": "Wireless Mouse", "description": "Ergonomic and long-lasting mouse", "price": 31},
    {"id": 8, "name": "Mechanical Keyboard", "description": "RGB backlit mechanical keyboard", "price": 85},
    {"id": 9, "name": "Gaming Monitor", "description": "27-inch high refresh rate monitor", "price": 32},
    {"id": 10, "name": "Noise Cancelling Earbuds", "description": "Compact earbuds with ANC", "price": 95},
    {"id": 11, "name": "Tablet Stand", "description": "Adjustable stand for tablets and phones", "price": 35},
    {"id": 12, "name": "Fitness Tracker", "description": "Monitor your heart rate and steps",  "price": 57},
    {"id": "1", "name": "Logitech M185 Wireless Mouse", "price": 14.99, "rating": 4.5, "image": "https://readdy.ai/api/search-image?query=Professional%20product%20photography%20of%20a%20blue%20wireless%20Logitech%20mouse%20on%20a%20clean%20white%20background%2C%20showing%20clear%20details%20of%20buttons%20and%20ergonomic%20design%2C%20high%20resolution%20product%20shot%20with%20soft%20shadows%2C%20perfect%20for%20e-commerce&width=300&height=300&seq=1&orientation=squarish", "color": "blue", "category": "wireless mouse"},
    {"id": "2", "name": "Microsoft Bluetooth Mouse", "price": 19.99, "rating": 4.3, "image": "https://readdy.ai/api/search-image?query=Professional%20product%20photography%20of%20a%20blue%20Microsoft%20Bluetooth%20mouse%20on%20a%20clean%20white%20background%2C%20showing%20clear%20details%20of%20buttons%20and%20ergonomic%20design%2C%20high%20resolution%20product%20shot%20with%20soft%20shadows%2C%20perfect%20for%20e-commerce&width=300&height=300&seq=2&orientation=squarish", "color": "blue", "category": "wireless mouse"},
    {"id": "3", "name": "HP X3000 Wireless Mouse", "price": 12.99, "rating": 4.0, "image": "https://readdy.ai/api/search-image?query=Professional%20product%20photography%20of%20a%20blue%20HP%20wireless%20mouse%20on%20a%20clean%20white%20background%2C%20showing%20clear%20details%20of%20buttons%20and%20ergonomic%20design%2C%20high%20resolution%20product%20shot%20with%20soft%20shadows%2C%20perfect%20for%20e-commerce&width=300&height=300&seq=3&orientation=squarish", "color": "blue", "category": "wireless mouse"},
    {"id": "4", "name": "Dell WM126 Wireless Mouse", "price": 15.99, "rating": 4.2, "image": "https://readdy.ai/api/search-image?query=Professional%20product%20photography%20of%20a%20blue%20Dell%20wireless%20mouse%20on%20a%20clean%20white%20background%2C%20showing%20clear%20details%20of%20buttons%20and%20ergonomic%20design%2C%20high%20resolution%20product%20shot%20with%20soft%20shadows%2C%20perfect%20for%20e-commerce&width=300&height=300&seq=4&orientation=squarish", "color": "blue", "category": "wireless mouse"},   
]

def wrap_tool_output(tool_name: str, payload: dict) -> str:
    return f"```tool_outputs:{tool_name}\n{json.dumps(payload, indent=2)}\n```"


def make_search_products(memory: MemoryStore):
    @function_tool()
    async def search_products(context: agents.RunContext, query: str) -> str:
        # Your search logic
        results = []
        for product in dummy_product_data:
            if query.lower() in product['name'].lower() or query.lower() in product['description'].lower():
                results.append(product)
        memory.set("last_product_search", results)
        if results:
            # return f"Search completed. Found {len(results)} products matching '{query}'."
            tool_payload = {
                "message": f"Search completed. Found {len(results)} products matching '{query}'.",
                "products": [p["name"] for p in results]
            }
            # tool_output = f"```tool_outputs:search_products\n{json.dumps(tool_payload, indent=2)}\n```"
            # return tool_output
            return wrap_tool_output("search_products", tool_payload)

        else:
            # return f"No products found for '{query}'."
            tool_payload = {
                "message": f"No products found for '{query}'.",
                "products": []
            }
            return wrap_tool_output("search_products", tool_payload)

    return search_products

def make_list_top_search_results(memory: MemoryStore):
    @function_tool()
    async def list_top_search_results(context: agents.RunContext, max_items: int = 10) -> str:
        results = memory.get("last_product_search", [])
        if not results:
            return "No recent search results found. Please perform a search first."
        top_results = results[:max_items]
        response = "Here are the top products from your search:\n"
        for idx, product in enumerate(top_results, start=1):
            response += f"{idx}. {product['name']}\n"
        # return response.strip()
        tool_payload = {
            "top_results": [product["name"] for product in top_results]
        }
        return wrap_tool_output("list_top_search_results", tool_payload)
        # tool_output = f"```tool_outputs:list_top_search_results\n{json.dumps(tool_payload, indent=2)}\n```"
        # return tool_output

    return list_top_search_results

def make_add_to_cart(memory: MemoryStore):
    @function_tool(
        description="Add a product to the cart based on recent search results by specifying the product name and quantity."
    )
    async def add_to_cart(context: agents.RunContext, product_name: str, quantity: int = 1) -> str:
        search_results = memory.get("last_product_search", [])
        if not search_results:
            return "No recent search results found. Please search for products first."

        # Try to find the product by name (case-insensitive)
        matched_product = None
        for product in search_results:
            if product_name.lower() in product["name"].lower():
                matched_product = product
                break

        if not matched_product:
            return f"No product named '{product_name}' found in the recent search results."

        # Add to cart with quantity
        cart = memory.get("cart", [])
        cart.append({
            "product": matched_product,
            "quantity": quantity
        })
        memory.set("cart", cart)
        # return f"Added {quantity} x '{matched_product['name']}' to your cart successfully."
        # i want to return the toolname as well
        tool_payload = {
            "cart": [{
                "name": matched_product["name"],
                "quantity": quantity
            }]
        }
        return wrap_tool_output("add_to_cart", tool_payload)
        # tool_output = f"```tool_outputs:add_to_cart\n{json.dumps(tool_payload, indent=2)}\n```"
        # return tool_output
        
    
    return add_to_cart

def make_view_cart(memory: MemoryStore):
    @function_tool(
        description="View items in the shopping cart along with their quantities and total cost, including delivery charges if applicable."
    )
    async def view_cart(context: agents.RunContext) -> str:
        cart = memory.get("cart", [])
        if not cart:
            return "Your cart is currently empty."

        total_cost = 0
        response = "Here are the items in your cart:\n"
        for item in cart:
            product = item['product']
            quantity = item['quantity']
            item_cost = product['price'] * quantity
            total_cost += item_cost
            response += f"- {quantity} x {product['name']} @ ${product['price']} each = ${item_cost}\n"

        # Delivery fee
        delivery_fee = 5 if total_cost < 50 else 0
        grand_total = total_cost + delivery_fee

        response += f"\nSubtotal is: ${total_cost}"
        response += f"\nand Delivery Fee is: ${delivery_fee}"
        response += f"\nTotal to Pay is: ${grand_total}"

        # return response.strip()
        tool_payload = {
            "cart": [
                {
                    "name": item["product"]["name"],
                    "price": item["product"]["price"],
                    "quantity": item["quantity"],
                    "subtotal": item["product"]["price"] * item["quantity"]
                } for item in cart
            ],
            "subtotal": total_cost,
            "delivery_fee": delivery_fee,
            "grand_total": grand_total
        }
        return wrap_tool_output("view_cart", tool_payload)
        # tool_output = f"```tool_outputs:view_cart\n{json.dumps(tool_payload, indent=2)}\n```"
        # return tool_output


    return view_cart

def make_place_order(memory: MemoryStore):
    @function_tool(
        description="Place an order for all products currently in the cart, clear the cart afterward, and return a confirmation message."
    )
    async def place_order(context: agents.RunContext) -> str:
        cart = memory.get("cart", [])
        if not cart:
            return "Your cart is empty. Add some products before placing an order."

        total_cost = 0
        for item in cart:
            product = item["product"]
            quantity = item["quantity"]
            total_cost += product["price"] * quantity

        delivery_charge = 5 if total_cost < 50 else 0
        final_amount = total_cost + delivery_charge

        # Clear the cart
        memory.set("cart", [])

        # return (
        #     f"Order placed successfully for {len(cart)} items.\n"
        #     f"Subtotal is: ${total_cost:.2f}\n"
        #     f"Delivery Charge is: ${delivery_charge}\n"
        #     f"Final Amount Paid is: ${final_amount:.2f}\n"
        #     "Thank you for shopping with us!"
        # )

        tool_payload = {
            "message": "Order placed successfully.",
            "items": len(cart),
            "subtotal": total_cost,
            "delivery_fee": delivery_charge,
            "final_amount": final_amount
        }
        return wrap_tool_output("place_order", tool_payload)
        # tool_output = f"```tool_outputs:place_order\n{json.dumps(tool_payload, indent=2)}\n```"
        # return tool_output


    return place_order

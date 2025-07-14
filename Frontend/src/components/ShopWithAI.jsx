import product1 from "../data/product1.json";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useMemo, useRef } from "react";
import LiveKitModal from "../components/LivekitModal";
import { FULL_PRODUCTS } from "../data/productsForAI"; // Adjust path


const ShopWithAI = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! I'm your Walmart Shopping Assistant. How can I help you today? You can ask me to find products like 'show me wireless mouse available in blue color under a budget of 2000'.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  const products = [
    {
      id: "1",
      name: "Logitech M185 Wireless Mouse",
      price: 14.99,
      rating: 4.5,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20product%20photography%20of%20a%20blue%20wireless%20Logitech%20mouse%20on%20a%20clean%20white%20background%2C%20showing%20clear%20details%20of%20buttons%20and%20ergonomic%20design%2C%20high%20resolution%20product%20shot%20with%20soft%20shadows%2C%20perfect%20for%20e-commerce&width=300&height=300&seq=1&orientation=squarish",
      color: "blue",
      category: "wireless mouse",
    },
    {
      id: "2",
      name: "Microsoft Bluetooth Mouse",
      price: 19.99,
      rating: 4.3,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20product%20photography%20of%20a%20blue%20Microsoft%20Bluetooth%20mouse%20on%20a%20clean%20white%20background%2C%20showing%20clear%20details%20of%20buttons%20and%20ergonomic%20design%2C%20high%20resolution%20product%20shot%20with%20soft%20shadows%2C%20perfect%20for%20e-commerce&width=300&height=300&seq=2&orientation=squarish",
      color: "blue",
      category: "wireless mouse",
    },
    {
      id: "3",
      name: "HP X3000 Wireless Mouse",
      price: 12.99,
      rating: 4.0,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20product%20photography%20of%20a%20blue%20HP%20wireless%20mouse%20on%20a%20clean%20white%20background%2C%20showing%20clear%20details%20of%20buttons%20and%20ergonomic%20design%2C%20high%20resolution%20product%20shot%20with%20soft%20shadows%2C%20perfect%20for%20e-commerce&width=300&height=300&seq=3&orientation=squarish",
      color: "blue",
      category: "wireless mouse",
    },
    {
      id: "4",
      name: "Dell WM126 Wireless Mouse",
      price: 15.99,
      rating: 4.2,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20product%20photography%20of%20a%20blue%20Dell%20wireless%20mouse%20on%20a%20clean%20white%20background%2C%20showing%20clear%20details%20of%20buttons%20and%20ergonomic%20design%2C%20high%20resolution%20product%20shot%20with%20soft%20shadows%2C%20perfect%20for%20e-commerce&width=300&height=300&seq=4&orientation=squarish",
      color: "blue",
      category: "wireless mouse",
    },
  ];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Simulate speech recognition
  const [showVA, setshowVA] = useState(false);

  const handleAgentClick = () => {
    setshowVA(true);
  };
  // const toggleListening = () => {
  //   setIsListening(!isListening);
  //   if (!isListening) {
  //     // Simulate voice recognition after 3 seconds
  //     setTimeout(() => {
  //       setInputText(
  //         "show me wireless mouse available in blue color under a budget of 2000"
  //       );
  //       setIsListening(false);
  //     }, 3000);
  //   } else {
  //     setInputText("");
  //   }
  // };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate bot response after 1 second
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: "Here are some blue wireless mice under $20:",
        sender: "bot",
        products: products.filter(
          (p) =>
            p.color === "blue" &&
            p.category === "wireless mouse" &&
            p.price < 20
        ),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // const handleAssistantMessage= (text) =>{
  //   const botMessage = {
  //     id: Date.now().toString(),
  //     text,
  //     sender: "bot",
  //     timestamp: new Date(),
  //   };
  //   setMessages((prev) => [...prev, botMessage]);
  // }

  const handleUserSpokenMessage = (text) => {
  const userMessage = {
    id: Date.now().toString(),
    text,
    sender: "user",
    timestamp: new Date(),
  };
  setMessages((prev) => [...prev, userMessage]);
};



  const handleAssistantMessage = (text) => {
    // Try to extract JSON tool_outputs from the assistant response
    const toolOutputs = [
      ...text.matchAll(/```tool_outputs\n([\s\S]*?)```/g),
    ].map((match) => match[1]);

    let products = [];
    let productDetails = {};

    if (toolOutputs.length >= 1) {
      try {
        const productList = JSON.parse(toolOutputs[0].replace(/'/g, '"'));
        products = productList.products || [];
      } catch (e) {
        console.error("Failed to parse product list:", e);
      }
    }

    if (toolOutputs.length >= 2) {
      try {
        productDetails = JSON.parse(toolOutputs[1].replace(/'/g, '"'));
      } catch (e) {
        console.error("Failed to parse product details:", e);
      }
    }

    const messageText = text.split("```")[0].trim(); // remove tool_output parts



    //fixing the code from giving blank screen when products properties doesnt match
    // const finalProducts = products.map((name, index) => ({
    //   id: index.toString(),
    //   name,
    //   price: 19.99, // You can dynamically add pricing later if needed
    //   rating: 4.3, // Temporary placeholder
    //   image: `https://readdy.ai/api/search-image?query=${encodeURIComponent(
    //     name + " product photo"
    //   )}&width=300&height=300`,
    //   description:
    //     productDetails[name]?.description || "No description provided",
    //   quantity: productDetails[name]?.quantity || 1,
    // }));


    const finalProducts = products
  .map((p) => {
    const name = p.name || p; // support both [{name: "..."}] and ["..."]
    const matched = FULL_PRODUCTS.find((fp) =>
      fp.name.toLowerCase().includes(name.toLowerCase())
    );
    if (matched) {
      return {
        ...matched,
        quantity: productDetails[name]?.quantity || 1,
        description:
          productDetails[name]?.description || matched.description || "No description",
      };
    }
    return null;
  })
  .filter(Boolean); // remove nulls




    const botMessage = {
      id: Date.now().toString(),
      text: messageText,
      sender: "bot",
      timestamp: new Date(),
      products: finalProducts.length > 0 ? finalProducts : undefined,
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0071DC] to-[#0086ff] text-white py-4 px-6 flex items-center justify-between shadow-lg">
        <div className="flex items-center transform hover:scale-105 transition-transform">
          <i className="fas fa-shopping-cart text-2xl mr-3 animate-bounce"></i>
          <span className="font-bold text-xl tracking-wide">Walmart</span>
        </div>
        <h1 className="text-xl font-semibold tracking-wider flex items-center">
          <i className="fas fa-robot mr-2"></i>
          Shopping Assistant
        </h1>
        <button
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
          aria-label="Toggle voice commands"
        >
          <i className="fas fa-cog"></i>
        </button>
      </header>

      {/* Chat Container */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-gray-100"
        style={{
          //   backgroundImage: "url('https://readdy.ai/api/search-image?query=Abstract%20subtle%20pattern%20with%20very%20light%20geometric%20shapes%20and%20dots%20creating%20a%20modern%20minimalist%20texture%20perfect%20for%20chat%20application%20background%20light%20gray%20color%20scheme%20professional%20clean%20design&width=400&height=400&seq=5&orientation=squarish')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === "user"
                ? "flex justify-end"
                : "flex justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-lg p-4 backdrop-blur-sm ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-[#0071DC] to-[#0086ff] text-white rounded-tr-none transform hover:scale-[1.02] transition-transform"
                  : "bg-white/90 text-gray-800 shadow-lg rounded-tl-none border border-gray-100 transform hover:scale-[1.02] transition-transform"
              }`}
            >
              <p>{message.text}</p>

              {/* Product cards */}
              {message.products && message.products.length > 0 && (
                <div className="mt-3 overflow-x-auto">
                  <div className="flex space-x-4 py-2 px-1">
                    {message.products.map((product) => (
                      <div
                        key={product.id}
                        className="flex-shrink-0 w-64 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                      >
                        <div className="h-40 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-gray-800 mb-1 truncate">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-1 truncate">
                            {product.description}
                          </p>
                          <div className="flex items-center mb-1">
                            <span className="text-lg font-bold text-[#0071DC]">
                              ${product.price.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={`fas fa-star ${
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  } text-sm`}
                                ></i>
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 ml-1">
                              {product.rating}
                            </span>
                          </div>
                          <button className="w-full bg-[#0071DC] text-white py-1.5 px-3 rounded-full hover:bg-blue-700 transition cursor-pointer !rounded-button whitespace-nowrap">
                            <i className="fas fa-cart-plus mr-1"></i> Add to
                            Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-xs mt-1 opacity-70 text-right">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white text-gray-800 rounded-lg rounded-tl-none p-3 shadow-md max-w-[75%]">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white/90 backdrop-blur-sm p-6 border-t border-gray-200 shadow-lg">
        <div className="flex items-center max-w-4xl mx-auto">
          <button
            onClick={handleAgentClick}
            className={`p-3 rounded-full mr-3 cursor-pointer !rounded-button whitespace-nowrap ${
              isListening
                ? "bg-red-500 text-white animate-pulse"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            aria-label="Voice input"
          >
            <i className="fas fa-microphone"></i>
          </button>
          {showVA && (
            <LiveKitModal
              setshowVA={setshowVA}
              onAssistantResponse={handleAssistantMessage}
              onUserSpeech={handleUserSpokenMessage}
            />
          )}
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                isListening ? "Listening..." : "Type your message here..."
              }
              className="w-full border-2 border-gray-200 rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-[#0071DC] focus:border-transparent text-gray-700 placeholder-gray-400 shadow-inner bg-gray-50/50 backdrop-blur-sm transition-all duration-300"
              disabled={isListening}
            />
            {isListening && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              </div>
            )}
          </div>
          <button
            onClick={handleSendMessage}
            className="ml-3 p-3 bg-[#0071DC] text-white rounded-full hover:bg-blue-700 transition cursor-pointer !rounded-button whitespace-nowrap"
            disabled={inputText.trim() === "" || isListening}
            aria-label="Send message"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
        {isListening && (
          <div className="mt-2 text-center text-sm text-gray-500">
            Speak now... I'm listening
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopWithAI;
// This component is a simple chat interface that simulates a shopping assistant using AI. It allows

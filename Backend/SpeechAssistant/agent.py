from dotenv import load_dotenv
from livekit import agents
from livekit.agents import AgentSession, Agent, RoomInputOptions
from livekit.plugins import (
    noise_cancellation,
)
from livekit.plugins import google
from prompts import AGENT_INSTRUCTION, SESSION_INSTRUCTION
from memory import MemoryStore
from tools import (
    make_search_products,
    make_list_top_search_results,
    make_add_to_cart,
    make_view_cart,
    make_place_order,
    make_website_action,
)
load_dotenv()


class Assistant(Agent):
    def __init__(self) -> None:
        self.memory = MemoryStore()
        super().__init__(
            instructions=AGENT_INSTRUCTION,
            llm=google.beta.realtime.RealtimeModel(
            voice="Aoede",
            temperature=0.6,
        ),
            tools=[
                make_search_products(self.memory),
                make_list_top_search_results(self.memory),
                make_add_to_cart(self.memory),
                make_view_cart(self.memory),
                make_place_order(self.memory),
                make_website_action(self.memory),
            ],
        )
        


async def entrypoint(ctx: agents.JobContext):
    session = AgentSession(
        
    )

    await ctx.connect()

    await session.start(
        room=ctx.room,
        agent=Assistant(),
        room_input_options=RoomInputOptions(
            # LiveKit Cloud enhanced noise cancellation
            # - If self-hosting, omit this parameter
            # - For telephony applications, use `BVCTelephony` for best results
            video_enabled=True,
            noise_cancellation=noise_cancellation.BVC(),
        ),
    )

    await session.generate_reply(
        instructions=SESSION_INSTRUCTION,
    )


if __name__ == "__main__":
    agents.cli.run_app(agents.WorkerOptions(entrypoint_fnc=entrypoint))

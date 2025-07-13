import {
  useVoiceAssistant,
  BarVisualizer,
  VoiceAssistantControlBar,
  useTrackTranscription,
  useLocalParticipant,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";
import "./SimpleVoiceAssistant.css";

// const Message = ({ type, text }) => {
//   return (
//     <div className="message">
//       <strong className={`message-${type}`}>
//         {type === "agent" ? "Agent: " : "You: "}
//       </strong>
//       <span className="message-text">{text}</span>
//     </div>
//   );
// };

const SimpleVoiceAssistant = ({onAssistantResponse}) => {
  const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
  const localParticipant = useLocalParticipant();
  const { segments: userTranscriptions } = useTrackTranscription({
    publication: localParticipant.microphoneTrack,
    source: Track.Source.Microphone,
    participant: localParticipant.localParticipant,
  });


  //since it kep ton repeating everytime the agent transcriptions change, we can use a useEffect to call the onAssistantResponse callback
//   useEffect(() => {
//   const lastAgentMessage = agentTranscriptions?.[agentTranscriptions.length - 1];
//   if (lastAgentMessage && onAssistantResponse) {
//     onAssistantResponse(lastAgentMessage.text);
//   }
// }, [agentTranscriptions, onAssistantResponse]);


  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   const allMessages = [
  //     ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
  //     ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
  //   ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);

  //   setMessages(allMessages);
  // }, [agentTranscriptions, userTranscriptions]);



  //it was repeatedly printing all the changing messages
//   const [lastSpokenText, setLastSpokenText] = useState("");

// useEffect(() => {
//   const lastAgentMessage = agentTranscriptions?.[agentTranscriptions.length - 1];

//   console.log("Agent transcription segment:", lastAgentMessage);

//   if (
//     lastAgentMessage &&
//     lastAgentMessage.text !== lastSpokenText &&
//     onAssistantResponse
//   ) {
//     setLastSpokenText(lastAgentMessage.text);
//     onAssistantResponse(lastAgentMessage.text);
//   }
// }, [agentTranscriptions, lastSpokenText, onAssistantResponse]);


//to onloy print when final:true
const [lastSpokenText, setLastSpokenText] = useState("");

useEffect(() => {
  const lastAgentMessage = agentTranscriptions?.[agentTranscriptions.length - 1];

  if (
    lastAgentMessage &&
    lastAgentMessage.text !== lastSpokenText &&
    lastAgentMessage.final && // ✅ only process final messages
    onAssistantResponse
  ) {
    setLastSpokenText(lastAgentMessage.text);
    onAssistantResponse(lastAgentMessage.text);
  }
}, [agentTranscriptions, lastSpokenText, onAssistantResponse]);



  return (
    <div className="voice-assistant-container">
      <div className="visualizer-container">
        <BarVisualizer state={state} barCount={7} trackRef={audioTrack} />
      </div>
      <div className="control-section">
        <VoiceAssistantControlBar />
      </div>
    </div>
  );
};

export default SimpleVoiceAssistant;

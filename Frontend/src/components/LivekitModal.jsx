import { useState, useCallback } from "react";
import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
import "@livekit/components-styles";
import SimpleVoiceAssistant from "./SimpleVoiceAssistant";

const LiveKitModal = ({ setshowVA }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="agent-room">
          <LiveKitRoom
            serverUrl={import.meta.env.VITE_LIVEKIT_URL}
            token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTIwNjE5MzgsImlzcyI6IkFQSTZMdmpjWWdheHNyRyIsIm5iZiI6MTc1MjA2MTAzOCwic3ViIjoid2YiLCJ2aWRlbyI6eyJjYW5QdWJsaXNoIjp0cnVlLCJjYW5QdWJsaXNoRGF0YSI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlLCJyb29tIjoiZHdmIiwicm9vbUpvaW4iOnRydWV9fQ.OvuO1qpplIztnXO3df6kA8qqc-j6YVW2dGUcffHQxA8"
            connect={true}
            video={false}
            audio={true}
            onDisconnected={() => {
              setshowVA(false);
            }}
          >
            <RoomAudioRenderer />
            <SimpleVoiceAssistant />
          </LiveKitRoom>
        </div>
      </div>
    </div>
  );
};

export default LiveKitModal;

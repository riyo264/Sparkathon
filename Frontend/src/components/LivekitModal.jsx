import { useState, useEffect, useCallback } from "react";
import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
import "@livekit/components-styles";
import SimpleVoiceAssistant from "./SimpleVoiceAssistant";

const LiveKitModal = ({ setshowVA }) => {
  const [name, setName] = useState("");
  const [token, setToken] = useState(null);

  const getToken = useCallback(async (userName) => {
    try {
      console.log("run");
      const response = await fetch(
        `/api/getToken?name=${encodeURIComponent(userName)}`
      );
      const token = await response.text();
      setToken(token);
      setIsSubmittingName(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const defaultName = "user-" + Math.random().toString(36).substring(2, 10);
    setName(defaultName);
  }, []);

  useEffect(() => {
    if (name && !token) {
      getToken(name);
    }
  }, [name, token, getToken]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="agent-room">
          {token ? (
            <LiveKitRoom
              serverUrl={import.meta.env.VITE_LIVEKIT_URL}
              token={token}
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
          ) : (
            <div
              style={{
                color: "white",
                textAlign: "center",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Connecting to assistant...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveKitModal;

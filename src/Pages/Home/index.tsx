import { useEffect, useState } from "react";
import "./home.scss";
import SpeechRecognition, {
  SpeechRecognitionOptions,
  useSpeechRecognition,
} from "react-speech-recognition";
import useSound from "use-sound";
import micOnSound from "../../assets/mic-on.wav";

export const Home = () => {
  const [dots, setDots] = useState<boolean>(false);
  const options: SpeechRecognitionOptions = {
    commands: [
      {
        command: "listen",
        callback: () => startListening(),
      },
      {
        command: "stop",
        callback: () => stopListening(),
      },
    ],
  };
  const { listening, interimTranscript, finalTranscript, resetTranscript } =
    useSpeechRecognition(options);

  const [playSound] = useSound(micOnSound);

  const [micPermission, setMicPermission] = useState<boolean>(false);

  const handleMicPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicPermission(true);
    } catch (err) {
      console.log(err);
      setMicPermission(false);
    }
  };

  useEffect(() => {
    handleMicPermission();
  }, []);

  //voice generated functions
  const startListening = () => {
    playSound();
    setDots(true);
    console.log(dots, "setted dots");
  };

  const stopListening = () => {
    setDots(false);
    SpeechRecognition.stopListening();
  };

  //main button functions
  const startMic = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopMic = () => {
    SpeechRecognition.stopListening();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition())
    return <div>Browser doesn't support Speech Recognition</div>;
  return (
    <div className="home-container">
      <h1>Home</h1>
      <p>Mic Permission: {micPermission ? "ON" : "OFF"}</p>
      <p>{listening ? "Mic on" : "Mic off"}</p>
      <button onClick={startMic}>Start Mic</button>
      <button onClick={stopMic}>Stop Mic</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{interimTranscript}</p>
      <p>{finalTranscript}</p>
      {dots ? (
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        "null"
      )}
    </div>
  );
};

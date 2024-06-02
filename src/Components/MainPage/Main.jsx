import React, { useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { toast } from "react-toastify"; 
import '../MainPage/MainPage.css'

const Main = () => {
  const [recordingChoice, setRecordingChoice] = useState({
    videoChoice: false,
    audioChoice: false,
    screenChoice: false,
  });

  const videoRef = useRef(null);

  const { videoChoice, audioChoice, screenChoice } = recordingChoice;

  const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
    useReactMediaRecorder({
      video: videoChoice,
      audio: audioChoice,
      screen: screenChoice,
    });

  const mediaHandler = (value) => {
    if (value === "video") {
      setRecordingChoice({
        videoChoice: true,
        audioChoice: false,
        screenChoice: false,
      });
    } else if (value === "audio") {
      setRecordingChoice({
        audioChoice: true,
        videoChoice: false,
        screenChoice: false,
      });
    } else if (value === "screen") {
      setRecordingChoice({
        screenChoice: true,
        videoChoice: false,
        audioChoice: false,
      });
    } else if (value === "video-audio") {
      setRecordingChoice({
        audioChoice: true,
        videoChoice: true,
        screenChoice: false,
      });
    } else if (value === "screen-audio") {
      setRecordingChoice({
        audioChoice: true,
        videoChoice: false,
        screenChoice: true,
      });
    }
  };

  useEffect(() => {
    if (previewStream && videoRef.current) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);

  const handleStartRecording = () => {
    if (!videoChoice && !audioChoice && !screenChoice) {
      toast.error("Please select a recording option");
      return;
    }

    startRecording();

    if (videoChoice && audioChoice) {
      toast.success("Video and Audio Recording started");
    } else if (screenChoice && audioChoice) {
      toast.success("Screen and Audio Recording started");
    } else if (videoChoice) {
      toast.success("Video Recording started");
    } else if (audioChoice) {
      toast.success("Audio Recording started");
    } else if (screenChoice) {
      toast.success("Screen Recording started");
    }
  };

  const handleStopRecording = () => {
    stopRecording();
    toast.info("Recording stopped");
  };

  return (
    <main className="main-container">
    <div className="recording-section">
      <h2 className="recording-title">
        Recorded Item 
      </h2>

      <div>
        {mediaBlobUrl && (
          <div className="video-container">
            <video
              src={mediaBlobUrl}
              controls
              autoPlay
              loop
              className="video-player"
            />
            <a
              href={mediaBlobUrl}
              download
              className="download-link"
            >
              Download
            </a>
          </div>
        )}
      </div>
    </div>

    <div className="preview-container">
      <div className="preview-content">
        <h3 className="recording-status">RECORDING STATUS: {status}</h3>
        <span className="preview-text">Preview 👇</span>

        {status === "recording" ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            className="video-preview"
          />
        ) : (
          <div className="screen">
            {/* Content for when not recording */}
          </div>
        )}
      </div>

      <div className="options-container">
        <label>
          <input
            type="radio"
            name="media-option"
            value="audio"
            onChange={(e) => mediaHandler(e.target.value)}
          />{" "}
          Audio
        </label>
        <label>
          <input
            type="radio"
            name="media-option"
            value="screen"
            onChange={(e) => mediaHandler(e.target.value)}
          />{" "}
          Screen
        </label>
        <label>
          <input
            type="radio"
            name="media-option"
            value="video"
            onChange={(e) => mediaHandler(e.target.value)}
          />{" "}
          Video
        </label>
        <label>
          <input
            type="radio"
            name="media-option"
            value="video-audio"
            onChange={(e) => mediaHandler(e.target.value)}
          />{" "}
          Video + Audio
        </label>
        <label>
          <input
            type="radio"
            name="media-option"
            value="screen-audio"
            onChange={(e) => mediaHandler(e.target.value)}
          />{" "}
          Screen + Audio
        </label>
      </div>

      <div className="buttons-container">
        <button
          onClick={handleStartRecording}
          className="start-button"
        >
          Start Recording
        </button>
        <button
          onClick={handleStopRecording}
          className="stop-button"
        >
          Stop Recording
        </button>
      </div>
    </div>
  </main>
  );
};

export default Main;
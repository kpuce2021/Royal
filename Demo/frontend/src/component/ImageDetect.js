import React, { useState, useRef } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import { drawKeypoints, drawSkeleton } from "./utilities";
import axios from 'axios';

function ImageDetect() {
  const [url, setUrl] = useState(null)
  const canvasRef = useRef(null);

  const onChange = (e) => {
    setUrl(URL.createObjectURL(e.target.files[0]))
  }
  
  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });
    //
    setInterval(() => {
      detect(net);
    }, 5000);
  };

  const detect = async (net) => {
    // if (
    //   typeof webcamRef.current !== "undefined" &&
    //   webcamRef.current !== null &&
    //   webcamRef.current.video.readyState === 4
    // ) {
    //   // Get Video Properties
    //   const video = webcamRef.current.video;
    //   const videoWidth = webcamRef.current.video.videoWidth;
    //   const videoHeight = webcamRef.current.video.videoHeight;

    //   // Set video width
    //   webcamRef.current.video.width = videoWidth;
    //   webcamRef.current.video.height = videoHeight;

      // Make Detections
      const videoWidth = 640
      const videoHeight = 480
      const video = document.getElementById('cat');
      const pose = await net.estimateSinglePose(video);
      console.log(pose);

      // axios.post('http://localhost:8080/',{
      //   pose: pose.keypoints
      // }).then( res => {
      //   console.log(res);
      // }).catch( err => {
      //   console.log(err);
      // })
      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
    }
  
  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.6, ctx);
    drawSkeleton(pose["keypoints"], 0.7, ctx);
  };
  
  //runPosenet();

  return(
    <div>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div>Pose확인</div>
        <input type='file' onChange={onChange} />
        <button onClick={() => runPosenet() }>업로드</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <img id='cat' alt='body' src={url} />
        <div style={{ 
          border: '1px solid red',
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center"
        }}>
          <div>추정된 자세</div>
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              top: 0,
              left: -5,
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ImageDetect
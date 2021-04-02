import React, { useState, useRef } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import { drawKeypoints, drawSkeleton } from "./utilities";
import axios from 'axios';

function ImageDetect() {
  const [url, setUrl] = useState(null)
  const [imgWidth, setimgWidth] = useState(0)
  const [imgHeight, setimgHeight] = useState(0)
  const [poseDetect, setPoseDetect] = useState([])
  const canvasRef = useRef(null);

  const onChange = (e) => {
    setUrl(URL.createObjectURL(e.target.files[0]))
  }
  
  const runPosenet = async () => {
    const net = await posenet.load({
      //inputResolution: { width: 640, height: 480 },
      //scale: 0.8,
    });
    //
    // setInterval(() => {
    //   detect(net);
    // }, 5000);
    detect(net)
  };

  const detect = async (net) => {
      const video = document.getElementById('cat');
      setimgWidth(video.width)
      setimgHeight(video.height)

      const videoWidth = video.width
      const videoHeight = video.height
      const pose = await net.estimateSinglePose(video,{
        flipHorizontal: true
      });
      console.log(pose);
      pose.keypoints.map(keypoint => {
        console.log('testpose',keypoint)
        setPoseDetect([...poseDetect, keypoint ])
      })

      console.log(poseDetect)

      axios.post('http://localhost:8080/',{
        pose: pose.keypoints
      }).then( res => {
        console.log(res);
      }).catch( err => {
        console.log(err);
      })
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
    console.log(poseDetect),
    <div>
      <div style={{ position: 'absolute', left: 0, }}>
        <div>Pose확인</div>
        <input type='file' onChange={onChange} />
        <button onClick={() => runPosenet() }>업로드</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        {
          url && 
          <img id='cat' alt='body' src={url} />
        }
        <div style={{ 
          border: '1px solid red',
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center"
        }}>
          {
            url && (
              <>
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
                    width: imgWidth,
                    height: imgHeight,
                  }}
                />
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ImageDetect
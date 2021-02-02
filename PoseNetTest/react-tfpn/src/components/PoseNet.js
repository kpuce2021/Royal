import React, { useState, useRef } from 'react'
import * as tf from "@tensorflow/tfjs"
import * as posenet from '@tensorflow-models/posenet'
import body from '../images/body.jpg'


function PoseNet() {
  const [url, setUrl] = useState(null)
  const fileTest = useRef()
  const onChange = (e) =>{
    setUrl(URL.createObjectURL(e.target.files[0]))
    
  }
  const estimatePoseOnImage = async() => {
    // load the posenet model from a checkpoint
    // const imageScaleFactor = 0.5;
    // const outputStride = 16;
    // const flipHorizontal = false;
    // const net = await posenet.load();
   
    // const pose = await net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride)
    // console.log(pose)
    // return pose;
    const imageElement = document.getElementById('cat');
    posenet.load().then(function(net) {
      const pose = net.estimateSinglePose(imageElement, {
        flipHorizontal: true
      });
      return pose;
    }).then(function(pose){
      console.log(pose);
    })
  }
  return(
    console.log(url),
    <div>
      <div>poseNet</div>
      <img id='cat' alt='body' src={url} ref={fileTest}/>
      <input 
        type='file'
        onChange={onChange}
      />
      <button onClick={()=> estimatePoseOnImage(url)}>업로드</button>
    </div>
  )
}

export default PoseNet;
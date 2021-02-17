import React, { useState, useRef } from 'react'
import * as tf from "@tensorflow/tfjs"
import * as posenet from '@tensorflow-models/posenet'
import body from '../images/body.jpg'
import { GoogleSpreadsheet } from "google-spreadsheet";
import { SPREADSHEET_ID, SHEET_ID, CLIENT_EMAIL, PRIVATE_KEY} from '../modules/env'


function PoseNet() {
  const [url, setUrl] = useState(null)
  const fileTest = useRef()
  const onChange = (e) =>{
    setUrl(URL.createObjectURL(e.target.files[0]))
    
  }
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  const appendSpreadsheet = async(row) => {
    console.log(row)
    console.log(doc)
    try {
      console.log("여기있어요!")
      doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      console.log('여기도 있어요!!')
      // loads document properties and worksheets
      const test = await doc.loadInfo();
      console.log('loadinfo',test)
      //doc.addSheet({ headerValues: ['Name','X','Y']});

      const sheet = doc.sheetsByIndex[1];
      console.log('sheet',sheet)
      const result = await sheet.addRow(row);
      //const addTest = await sheet.addRow({ Name: "new name", X: "new value", Y: "new value" })
      console.log('result',result)
      alert('입력이 완료 되었습니다!');
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  // const newRow = { Name: "new name", Value: "new value" };

  // appendSpreadsheet(newRow);

  const estimatePoseOnImage = async() => {
    const imageElement = document.getElementById('cat');
    posenet.load().then(function(net) {
      const pose = net.estimateSinglePose(imageElement, {
        flipHorizontal: true
      });
      return pose;
    }).then(function(pose){
      console.log('pose',pose.keypoints[11]);
      const newRow = { 
        Name: "Squart",
        X_leftHip: pose.keypoints[11].position.x, 
        Y_leftHip: pose.keypoints[11].position.y,
        X_rightHip: pose.keypoints[12].position.x,
        Y_rightHip: pose.keypoints[12].position.y,
        X_leftKnee: pose.keypoints[13].position.x,
        Y_leftKnee: pose.keypoints[13].position.y,
        X_rightKnee: pose.keypoints[14].position.x,
        Y_rightKnee: pose.keypoints[14].position.y,
        X_leftAnkle: pose.keypoints[15].position.x,
        Y_leftAnkle: pose.keypoints[15].position.y,
        X_rightAnkle: pose.keypoints[16].position.x,
        Y_rightAnkle: pose.keypoints[16].position.y
      }
      appendSpreadsheet(newRow);
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
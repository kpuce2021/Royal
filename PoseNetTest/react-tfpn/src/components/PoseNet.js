import React, { useState, useRef } from 'react'
import * as tf from "@tensorflow/tfjs"
import * as posenet from '@tensorflow-models/posenet'
import body from '../images/body.jpg'
import { GoogleSpreadsheet } from "google-spreadsheet";
import { SPREADSHEET_ID, SHEET_ID, CLIENT_EMAIL, PRIVATE_KEY} from '../modules/env'


function PoseNet() {
  const [url, setUrl] = useState(null)
  const [type, setType] = useState("squart")
  const fileTest = useRef()
  const onChange = (e) =>{
    setUrl(URL.createObjectURL(e.target.files[0]))
  }
  const onTypeChange = (e) => {
    setType(e.target.value)
  }
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  const appendSpreadsheet = async(row) => {
    console.log("row",row)
    console.log("doc",doc)
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

      const sheet = doc.sheetsByIndex[3];
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
      console.log('pose',pose);
      const newRow = { 
        Name: type,
        X_leftEye: pose.keypoints[1].position.x, 
        Y_leftEye: pose.keypoints[1].position.y,
        X_rightEye: pose.keypoints[2].position.x, 
        Y_rightEye: pose.keypoints[2].position.y,
        X_leftEar: pose.keypoints[3].position.x, 
        Y_leftEar: pose.keypoints[3].position.y,
        X_rightEar: pose.keypoints[4].position.x, 
        Y_rightEar: pose.keypoints[4].position.y,
        X_leftShoulder: pose.keypoints[5].position.x, 
        Y_leftShoulder: pose.keypoints[5].position.y,
        X_rightShoulder: pose.keypoints[6].position.x, 
        Y_rightShoulder: pose.keypoints[6].position.y,
        X_leftElbow: pose.keypoints[7].position.x, 
        Y_leftElbow: pose.keypoints[7].position.y,
        X_rightElbow: pose.keypoints[8].position.x, 
        Y_rightElbow: pose.keypoints[8].position.y,
        X_leftWrist: pose.keypoints[9].position.x, 
        Y_leftWrist: pose.keypoints[9].position.y,
        X_rightWrist: pose.keypoints[10].position.x, 
        Y_rightWrist: pose.keypoints[10].position.y,
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
    console.log(type),
    <div>
      <div>poseNet</div>
      <img id='cat' alt='body' src={url} ref={fileTest}/>
      <div>
        <select
          onChange={onTypeChange}
          value={type}
        >
          <option value="squart">squart</option>
          <option value="lunge">lunge</option>
        </select>
        <input 
          type='file'
          onChange={onChange}
        />
        <button onClick={()=> estimatePoseOnImage(url)}>업로드</button>
      </div>
    </div>
  )
}

export default PoseNet;
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

      const sheet = doc.sheetsByIndex[0];
      console.log('sheet',sheet)
      const result = await sheet.addRows(row);
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
      const newRow = [
        { Name: pose.keypoints[11].part, X: pose.keypoints[11].position.x, Y: pose.keypoints[11].position.y },
        { Name: pose.keypoints[12].part, X: pose.keypoints[12].position.x, Y: pose.keypoints[12].position.y },
        { Name: pose.keypoints[13].part, X: pose.keypoints[13].position.x, Y: pose.keypoints[13].position.y },
        { Name: pose.keypoints[14].part, X: pose.keypoints[14].position.x, Y: pose.keypoints[14].position.y },
        { Name: pose.keypoints[15].part, X: pose.keypoints[15].position.x, Y: pose.keypoints[15].position.y },
        { Name: pose.keypoints[16].part, X: pose.keypoints[16].position.x, Y: pose.keypoints[16].position.y },

      ];
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
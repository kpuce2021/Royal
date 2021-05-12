#!/usr/bin/env python
# coding: utf-8

# 작업 코드
 
 
import time
import sys
import tensorflow as tf
import pandas as pd
import efficientnet.tfkeras
from tensorflow.keras.models import load_model
loaded_model = tf.keras.models.load_model(r'C:\Users\Administrator\Documents\Royal\Demo\rest_api\squart_lunge_demo_v1.2')

def pose_squart(location):
    
    #start = time.time()  # 시작 시간 저장

    

    #print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간

    pose = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]]
    
    pose_split = location.split(',')

    for i in range(len(pose_split)):
        pose[0][i] = float(pose_split[i])
    
    """for i in range(len(location)):
        pose[0][i] = location[i]
    """

    return round(loaded_model.predict(pose)[0][0] * 100,2)
    #print(round(loaded_model.predict(pose)[0][0] * 100,2))
    #pose_predict = loaded_model.predict(pose)[0][1]
    #print(pose_predict)
    #return pose_predict


    

if __name__ == '__main__': 
    pose_squart(sys.argv[1])
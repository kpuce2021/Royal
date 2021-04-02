import time
import sys
import tensorflow as tf
import pandas as pd
import keras
from tensorflow.keras.models import load_model

loaded_model = tf.keras.models.load_model(r'C:\Users\jin\env_dj_test\t2\test2\newApp\squart_lunge_demo_v1.2')

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

    print(round(loaded_model.predict(pose)[0][0] * 100,2))
    #pose_predict = loaded_model.predict(pose)[0][1]
    #print(pose_predict)
    #return pose_predict


    

if __name__ == '__main__': 
#    pose_squart(sys.argv[1])
    pose_squart("317.16524045476655,88.86716850072958,358.4328337791829,90.15517654122083,300.4476304109922,92.25752181116245,381.8209736746109,98.07296099829766,243.83124848005838,185.75326407465954,413.849164792072,162.8877181116245,277.9147996716926,427.1045871838521,401.0709394759241,423.10638071498056,111.64652237354085,377.6656736381323,549.3698397981517,383.2503571862841,169.23612293287937,548.292079584144,491.4813427164397,542.8686618433852")
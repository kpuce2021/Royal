from django.shortcuts import render
from django.views import View
from django.http import HttpResponse, JsonResponse
from django.http import HttpResponseRedirect
from . import load_model
import urllib3
import json
import requests 
#import load_model
#loaded_model = tf.keras.models.load_model(r'C:\Users\user\Desktop\Royal\Demo\rest_api\squart_lunge_demo_v1.2')

class IndexView(View):
    def get(self, request):
        return HttpResponse("Get 요청을 잘받았다")

    def post(self, request):
        #print('post 요청처리')
        data = json.loads(request.body) 
        pose = load_model.pose_squart(data['arrString'])
        print("###  Squart Score : ", pose," %  ###")
       
        return HttpResponse(pose,{"test2" : pose})

    def put(self, request):
        return HttpResponse("Put 요청을 잘받았다")

    def delete(self, request):
        return HttpResponse("Delete 요청을 잘받았다")
# Create your views here.

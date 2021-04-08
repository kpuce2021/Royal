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
        print("123123")
        """if request.method == 'GET':
            print('get 요청처리')
            url = 'http://localhost:8080'       
            return requests.get(url).json()  
        elif request.method == 'POST':
            print('post 요청처리') 
            
            data = json.loads(request.body)
            print(data)
            
            #irum = request.POST.get("name")
            irum = request.POST["name"]
            return render(request, "rest_api", {"key":irum})
            return HttpResponse("Post 요청을 잘받았다")
        else: 
            print("요청실패") """ 

        return HttpResponse("Get 요청을 잘받았다")

    def post(self, request):
        #print('post 요청처리')
        data = json.loads(request.body) 
        #print("###  Squart Score : ", data," %  ###")
        #irum = request.POST['arrString']
        pose = load_model.pose_squart(data['arrString'])
        print("###  Squart Score : ", pose," %  ###")
        #print(data['arrString'])
        #print(irum)
        #return HttpResponse("Post 요청을 잘받았다")
        #return render(request, "http://localhost:8080",{"data": pose})
        #return JsonResponse("http://localhost:8080", {"data":pose})
        return JsonResponse({"data":pose})
        #return HttpResponse('http://localhost:8080/',{"data":pose})

    def put(self, request):
        return HttpResponse("Put 요청을 잘받았다")

    def delete(self, request):
        return HttpResponse("Delete 요청을 잘받았다")
# Create your views here.

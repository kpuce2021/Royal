from django.shortcuts import render
from django.urls import path
from django.http import HttpResponse, JsonResponse
from . import load_model


def pose_predict(request):
    path('', load_model.pose_squart)

    

    return HttpResponse('success')
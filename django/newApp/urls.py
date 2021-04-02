from django.urls import path
from . import views

urlpatterns = [
    path('', views.pose_predict),
]

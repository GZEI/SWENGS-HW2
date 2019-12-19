from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views
router = routers.DefaultRouter()
router.register(r'stations', views.StationViewSet)
router.register(r'sensors', views.SensorViewSet)
router.register(r'sensortypes',views.SensorTypeViewSet)
router.register(r'stationtypes',views.StationTypeViewSet)
urlpatterns = [
    path('', include(router.urls)),
]

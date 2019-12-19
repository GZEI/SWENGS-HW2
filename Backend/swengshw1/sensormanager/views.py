from django.shortcuts import render
from .serializers import SensorSerializer, StationSerializer,SensorTypeSerializer, StationTypeSerializer
from rest_framework import viewsets
from . import models


class StationViewSet(viewsets.ModelViewSet):
    queryset = models.Station.objects.all()
    serializer_class = StationSerializer

class SensorViewSet(viewsets.ModelViewSet):
    queryset = models.Sensor.objects.all()
    serializer_class = SensorSerializer
class SensorTypeViewSet(viewsets.ModelViewSet):
    queryset = models.SensorType.objects.all()
    serializer_class = SensorTypeSerializer
# Create your views here.
class StationTypeViewSet(viewsets.ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = StationTypeSerializer

from rest_framework import serializers
from . import models

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Station
        fields = '__all__'
class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Sensor
        fields = '__all__'
class SensorTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SensorType
        fields = "__all__"
class StationTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = "__all__"
        
from django.db import models

class Station(models.Model):
    name= models.TextField()
    location = models.TextField()
    description= models.TextField(blank=True,default='')
    invalid = models.BooleanField()
    category = models.ManyToManyField("Category",blank=True)
    def __str__(self):
        return self.name
    
class Category(models.Model):
    name=models.TextField()
    def __str__(self):
        return self.name
    
class Sensor(models.Model):
    station=models.ForeignKey(Station,on_delete=models.CASCADE)
    sensorType = models.ManyToManyField('SensorType', blank=True)
    name=models.TextField()
    description=models.TextField()
    validFrom=models.DateField()
    validTo=models.DateField()
    invalid = models.BooleanField()
    def __str__(self):
        return self.name
class SensorType(models.Model):
    name=models.TextField()
    def __str__(self):
        return self.name
    
# Create your models here.

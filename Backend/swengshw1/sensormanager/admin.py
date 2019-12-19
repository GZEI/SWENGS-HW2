from django.contrib import admin
from . import models


class SensorAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.Sensor,SensorAdmin)

class StationAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.Station, StationAdmin)
class SensorTypeAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.SensorType, SensorTypeAdmin)

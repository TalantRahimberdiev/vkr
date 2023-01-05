from django.contrib import admin

# Register your models here.

from master.models import Master
from master.models import Specialities
from master.models import Tuition
from master.models import Distance


admin.site.register(Master)
admin.site.register(Specialities)
admin.site.register(Tuition)
admin.site.register(Distance)
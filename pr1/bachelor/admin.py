from django.contrib import admin

# Register your models here.

from bachelor.models import Bachelor
from bachelor.models import Specialities
from bachelor.models import Tuition
from bachelor.models import Distance


admin.site.register(Bachelor)
admin.site.register(Specialities)
admin.site.register(Tuition)
admin.site.register(Distance)
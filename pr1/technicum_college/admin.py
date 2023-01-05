from django.contrib import admin

# Register your models here.

from technicum_college.models import Technicum, College

admin.site.register(Technicum)
admin.site.register(College)

from django.contrib import admin

from faculties.models import Kafedra, Dekanat, Faculty

# Register your models here.

admin.site.register(Kafedra)
admin.site.register(Dekanat)
admin.site.register(Faculty)

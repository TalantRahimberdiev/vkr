from django.contrib import admin

# Register your models here.

from statistika.models import Trudoustroystvo, Kolichestvo_postupivshih, Staff, Reyting

admin.site.register(Trudoustroystvo)
admin.site.register(Kolichestvo_postupivshih)
admin.site.register(Staff)
admin.site.register(Reyting)

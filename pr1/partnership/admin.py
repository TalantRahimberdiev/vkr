from django.contrib import admin
from .models import Partner
from .models import Country

# Register your models here.

admin.site.register(Partner)
admin.site.register(Country)
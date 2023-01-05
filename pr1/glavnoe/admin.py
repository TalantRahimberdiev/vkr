from django.contrib import admin

# Register your models here.

from glavnoe.models import Action,Mission,Strategy,Staff,History

admin.site.register(Action)
admin.site.register(Mission)
admin.site.register(Strategy)
admin.site.register(Staff)
admin.site.register(History)
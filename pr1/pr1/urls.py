
from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('entry/', include('entry.urls')),
    path('glavnoe/',include('glavnoe.urls')),
    path('ovuze/',include('ovuze.urls')),
    path('partnership/',include('partnership.urls')),
    path('statistika/',include('statistika.urls')),
    path('admission/',include('admission.urls')),
    path('structure/',include('structure.urls')),
    path('instructure/',include('instructure.urls')),
    path('technicum_college/',include('technicum_college.urls')),
    path('bachelor/',include('bachelor.urls')),
    path('master/',include('master.urls')),
    path('faculties/',include('faculties.urls')),
    path('schoolarship/', include('schoolarship.urls')),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
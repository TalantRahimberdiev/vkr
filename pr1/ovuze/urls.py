
from django.urls import path
from ovuze import views

urlpatterns = [
    path('prof', views.prof),
    path('stajirovka', views.stajirovka),
    path('libriary', views.libriary),
    path('npa', views.npa),
    path('gallery',views.gallery),
]



from django.urls import path

from master import views

urlpatterns = [
    path('', views.masters_list),
]
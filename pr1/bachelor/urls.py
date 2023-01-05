
from django.urls import path

from bachelor import views

urlpatterns = [
    path('', views.bachelors_list),
]
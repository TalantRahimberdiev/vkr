
from django.urls import path

from .views import structure

urlpatterns = [
    path('', structure),
]

from django.urls import path

from .views import partners_list

urlpatterns = [
    path('', partners_list),
]

from django.urls import path

from instructure import views

urlpatterns = [
    path('', views.instructure_list),
]
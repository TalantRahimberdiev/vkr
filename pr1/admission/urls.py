
from django.urls import path

from admission import views

urlpatterns = [
    path('', views.admission_list),
]

from django.urls import path

from technicum_college import views

urlpatterns = [
    path('technicum/', views.technicum_list),
    path('college/', views.college_list),
]
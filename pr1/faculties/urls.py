
from django.urls import path

from faculties import views

urlpatterns = [
    path('', views.faculties_list),
    path('<int:pk>/',views.faculty_by_pk)
]
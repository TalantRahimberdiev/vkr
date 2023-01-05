
from django.urls import path

from statistika import views

urlpatterns = [
    path('trudoustroystvo_table/', views.trudoustroystvo_table),
    path('trudoustroystvo_statistika/', views.trudoustroystvo_statistika),
    path('kolichestvo_postupivshih_table/', views.kolichestvo_postupivshih_table),
    path('kolichestvo_postupivshih_statistika/', views.kolichestvo_postupivshih_statistika),
    path('professorskiy_sostav_table/', views.professorskiy_sostav_table),
    path('professorskiy_sostav_statistika/', views.professorskiy_sostav_statistika),
    path('reyting_table/', views.reyting_table),
    path('reyting_statistika/', views.reyting_statistika),
]
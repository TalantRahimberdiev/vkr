
from django.urls import path

from glavnoe import views

urlpatterns = [
    path('action', views.action_list),
    path('mission', views.mission_list),
    path('strategy', views.strategy_list),
    path('staff', views.staff_list),
    path('history', views.history_list),
]
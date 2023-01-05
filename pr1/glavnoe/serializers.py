
from rest_framework import serializers
from .models import Action, Mission, Strategy, Staff, History

class Action_Ser(serializers.ModelSerializer):
  class Meta:
    model=Action 
    fields = ('__all__')

class Mission_Ser(serializers.ModelSerializer):
  class Meta:
    model=Mission 
    fields = ('__all__')

class Strategy_Ser(serializers.ModelSerializer):
  class Meta:
    model=Strategy
    fields = ('__all__')

class Staff_Ser(serializers.ModelSerializer):
    class Meta:
      model = Staff
      fields = ( '__all__')

class History_Ser(serializers.ModelSerializer):
    class Meta:
      model = History
      fields = ( '__all__')
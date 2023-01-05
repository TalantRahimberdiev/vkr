
from rest_framework import serializers
from .models import Technicum, College

class Technicum_Ser(serializers.ModelSerializer):
  class Meta:
    model=Technicum 
    fields = ('__all__')

class College_Ser(serializers.ModelSerializer):
  class Meta:
    model=College 
    fields = ('__all__')

from rest_framework import serializers
from .models import Structure

class Structure_Ser(serializers.ModelSerializer):
  class Meta:
    model=Structure 
    fields = ('__all__')


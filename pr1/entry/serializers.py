
from rest_framework import serializers
from .models import Npa


class Npa_Ser(serializers.ModelSerializer):
    class Meta:
      model = Npa 
      fields = ( '__all__' )

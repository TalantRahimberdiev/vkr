
from rest_framework import serializers
from .models import Bachelor
from .models import Specialities
from .models import Tuition
from .models import Distance

class Tuition_Ser(serializers.ModelSerializer):
  class Meta:
    model=Tuition 
    fields = ('tuition')

class Distance_Ser(serializers.ModelSerializer):
  class Meta:
    model=Distance 
    fields = ('distance')

class Specialities_Ser(serializers.ModelSerializer):
  distance=serializers.CharField(source='distance.distance')
  fees=serializers.CharField(source='fees.tuition')
  class Meta:
    model=Specialities 
    fields = ('name', 'fees','distance','price')


class Bachelor_Ser(serializers.ModelSerializer):
    specialities=Specialities_Ser(many=True)

    class Meta:
      model = Bachelor 
      fields = ( 'code','name','description','specialities' )


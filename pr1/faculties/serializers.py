
from rest_framework import serializers
from .models import Kafedra, Dekanat, Faculty

class Dekanat_Ser(serializers.ModelSerializer):
    class Meta:
      model = Dekanat 
      fields = ( '__all__' )

class Faculty_Ser(serializers.ModelSerializer):
    class Meta:
      model = Faculty 
      fields = ('pk','title' )

class Faculty_by_pk_Ser(serializers.ModelSerializer):

    fio_dekan=serializers.CharField(source='dekan.dekan')
    phone=serializers.CharField(source='dekan.phone')
    email=serializers.CharField(source='dekan.email')
    address=serializers.CharField(source='dekan.address')
    class Meta:
      model = Faculty 
      fields = ('fio_dekan','phone', 'email', 'address','title')

class Kafedra_Ser(serializers.ModelSerializer):
  class Meta:
    model = Kafedra 
    fields = ( '__all__' )
    

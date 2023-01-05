
from rest_framework import serializers
from .models import Partner
from .models import Country


class Country_Ser(serializers.ModelSerializer):
  class Meta:
    model=Country 
    fields = ('name')


class Partner_Ser(serializers.ModelSerializer):
  country=serializers.CharField(source='country.name')
  class Meta:
    model=Partner 
    fields = ('name','country','link')




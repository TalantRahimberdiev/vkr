
from rest_framework import serializers
from .models import Prof, Stajirovka,Libriary,Npa,Gallery

class Prof_Ser(serializers.ModelSerializer):
    class Meta:
      model = Prof 
      fields = ( '__all__' )
    

class Stajirovka_Ser(serializers.ModelSerializer):
    class Meta:
      model = Stajirovka 
      fields = ( '__all__' )

class Libriary_Ser(serializers.ModelSerializer):
    class Meta:
      model = Libriary 
      fields = ( '__all__' )

class Npa_Ser(serializers.ModelSerializer):
    class Meta:
      model = Npa 
      fields = ( '__all__' )

class Gallery_Ser(serializers.ModelSerializer):
    class Meta:
      model = Gallery 
      fields = ( '__all__' )
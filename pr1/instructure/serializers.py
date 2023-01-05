
from rest_framework import serializers
from .models import Instructure

class Instructure_Ser(serializers.ModelSerializer):

    class Meta:
      model = Instructure 
      fields = ( 'nomer','title','description' )

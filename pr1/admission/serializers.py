
from rest_framework import serializers
from .models import Admission

class Admission_Ser(serializers.ModelSerializer):

    class Meta:
      model = Admission 
      fields = ( '__all__' )

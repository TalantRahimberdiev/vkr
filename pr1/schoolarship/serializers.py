
from rest_framework import serializers
from .models import Stipendia

class Stipendia_Ser(serializers.ModelSerializer):
    class Meta:
      model = Stipendia 
      fields = ( '__all__' )
    
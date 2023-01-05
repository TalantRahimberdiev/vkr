
from rest_framework import serializers
from .models import Kolichestvo_postupivshih, Staff, Trudoustroystvo, Reyting

class Trudoustroystvo_Ser(serializers.ModelSerializer):

    class Meta:
      model = Trudoustroystvo
      fields = ( '__all__' )


class Kolichestvo_postupivshih_Ser(serializers.ModelSerializer):

    class Meta:
      model = Kolichestvo_postupivshih
      fields = ( '__all__' )


class Staff_Ser(serializers.ModelSerializer):

    class Meta:
      model = Staff
      fields = ( '__all__' )


class Reyting_Ser(serializers.ModelSerializer):

    class Meta:
      model = Reyting
      fields = ( '__all__' )

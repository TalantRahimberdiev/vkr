from django.db import models

# Create your models here.


class Country(models.Model):
   name=models.CharField(max_length=30)
   def __str__(self):
      return self.name


class Partner(models.Model):
   name=models.CharField(max_length=70)
   link=models.CharField(max_length=70)
   country=models.ForeignKey(Country,on_delete=models.CASCADE,null=True)
   def __str__(self):
      return self.name

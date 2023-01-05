from django.db import models

# Create your models here.


class Structure(models.Model):
   nazvanie_korpusa=models.CharField(max_length=30,null=True)
   foto=models.ImageField(upload_to='structure',null=True)
   address=models.CharField(max_length=45,null=True)
   def __str__(self):
      return self.nazvanie_korpusa
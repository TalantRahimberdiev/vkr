
from django.db import models

class Npa(models.Model):
   name=models.CharField(max_length=100, null=True)
   description=models.CharField(max_length=300, null=True)
   document=models.FileField(upload_to='npa_materials',null=True)

   def __str__(self):
      return (self.name)
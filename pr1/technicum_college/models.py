
from django.db import models


class Technicum(models.Model):
   name=models.CharField(max_length=132,null=True)
   description=models.CharField(max_length=700,null=True)
   fees=models.IntegerField(null=True)

   def __str__(self):
      return "%s %s" % (self.name, self.fees )


class College(models.Model):
   name=models.CharField(max_length=132,null=True)
   description=models.CharField(max_length=700,null=True)
   fees=models.IntegerField(null=True)

   def __str__(self):
      return "%s %s" % (self.name, self.fees )




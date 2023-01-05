
from django.db import models

class Tuition(models.Model):
   tuition = models.CharField(max_length=100)
   def __str__(self):
      return self.tuition

class Distance(models.Model):
   distance = models.CharField(max_length=100)
   def __str__(self):
      return self.distance

class Specialities(models.Model):
   name = models.CharField(max_length=100)
   fees=models.ForeignKey(Tuition,on_delete=models.CASCADE, null=True)
   distance=models.ForeignKey(Distance,on_delete=models.CASCADE,null=True)
   price=models.IntegerField(null=True)
   
   def __str__(self):
      return (self.name) 

class Bachelor(models.Model):
   name=models.CharField(max_length=132)
   code = models.CharField(max_length=30)
   description=models.CharField(max_length=700)
   specialities=models.ManyToManyField(Specialities)

   def __str__(self):
      return "%s %s" % (self.code, self.name )


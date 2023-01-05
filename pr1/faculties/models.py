from django.db import models

# Create your models here.

class Dekanat(models.Model):
   dekan=models.CharField(max_length=133, null=True)
   phone=models.CharField(max_length=137, null=True)
   email=models.EmailField(null=True)
   address=models.CharField(max_length=500, null=True)

   def __str__(self):
      return self.dekan

class Faculty(models.Model):
   title = models.CharField(null=True, max_length=500)
   dekan = models.OneToOneField(Dekanat,on_delete=models.CASCADE, primary_key=True)

   def __str__(self):
      return self.title 

class Kafedra(models.Model):
   title= models.CharField(max_length=145, null=True)
   zav_kafedra=models.CharField(max_length=133, null=True)
   phone=models.CharField(max_length=137, null=True)
   email=models.EmailField(null=True)
   faculty= models.ForeignKey(Faculty, on_delete=models.CASCADE,null=True)
   address= models.CharField(null=True,max_length=300)

   def __str__(self):
      return self.title

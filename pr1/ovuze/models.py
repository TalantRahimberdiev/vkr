
from django.db import models

class Prof(models.Model):
   country=models.CharField(max_length=70)
   name = models.CharField(max_length=130)
   email=models.EmailField()
   telephone=models.CharField(max_length=70)
   fax=models.CharField(max_length=70)
   address=models.CharField(max_length=70)

class Stajirovka(models.Model):
   organization=models.CharField(max_length=70)
   description = models.CharField(max_length=130)
   email=models.EmailField()
   telephone=models.CharField(max_length=70)
   address=models.CharField(max_length=70)
   foto=models.ImageField(upload_to='stajirovka_fotos', null=True)

class Libriary(models.Model):
   description=models.CharField(max_length=100)
   link=models.URLField(max_length=200)

class Npa(models.Model):
   name=models.CharField(max_length=100, null=True)
   description=models.CharField(max_length=300)
   document=models.FileField(upload_to='npa_materials',null=True)

class Gallery(models.Model):
   foto=models.ImageField(upload_to='foto_gallery',null=True)
   description=models.CharField(max_length=200,null=True)

   def __str__(self):
      return self.description


from django.db import models

class Admission(models.Model):
   manager=models.CharField(max_length=70)
   characteristics = models.CharField(max_length=170)
   whatsapp=models.CharField(max_length=70)
   facebook=models.CharField(max_length=70)
   instagramm=models.CharField(max_length=70)
   telephone=models.CharField(max_length=70)
   fax=models.CharField(max_length=70)
   mail=models.CharField(max_length=700)
   site=models.CharField(max_length=70)
   address=models.CharField(max_length=70)
   foto=models.ImageField(upload_to='admission',null=True)

   def __str__(self):
      return self.manager

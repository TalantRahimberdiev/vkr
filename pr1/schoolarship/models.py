
from django.db import models

class Stipendia(models.Model):
   name=models.CharField(max_length=300, null=True)
   description=models.CharField(max_length=1300)

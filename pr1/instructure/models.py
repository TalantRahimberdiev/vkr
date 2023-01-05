
from django.db import models


class Instructure(models.Model):
   nomer=models.IntegerField()
   title = models.CharField(max_length=70)
   description=models.CharField(max_length=700)

   def __str__(self):
      return "%s %s" % (self.nomer, self.title )

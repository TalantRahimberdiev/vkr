
from django.db import models

class Trudoustroystvo(models.Model):
   god=models.IntegerField(null=True)
   trudoustroen = models.IntegerField(null=True)

   def __str__(self):
      return "%s %s" % (self.god, self.trudoustroen)


class Kolichestvo_postupivshih(models.Model):
   god=models.IntegerField(null=True)
   kolichestvo = models.IntegerField(null=True)

   def __str__(self):
      return "%s %s" % (self.god, self.kolichestvo)


class Staff(models.Model):
   PROFESSOR = 'Профессора'
   DOCTOR = 'Доктора'
   DOSENT = 'Доценты'
   KANDIDAT = 'Кандидаты'
   SENIOR_TEACHER = 'Старшие преподаватели'
   TEACHER='Преподаватели'
   LABORANT='Лаборанты'
   STAFF_CHOICES = [
      (PROFESSOR,'Профессора'), 
      (DOCTOR,'Доктора'), 
      (DOSENT,'Доценты'), 
      (KANDIDAT,'Кандидаты'), 
      (SENIOR_TEACHER,'Старшие преподаватели'), 
      (TEACHER,'Преподаватели'), 
      (LABORANT,'Лаборанты'),
   ]
   level = models.CharField(
      max_length=32,
      choices=STAFF_CHOICES,
      default=PROFESSOR
   )
   quantity=models.IntegerField(null=True)

   def is_upperclass(self):
      return self.STAFF_CHOICES


class Reyting(models.Model):
   vuz=models.CharField(max_length=37, null=True)
   kolichestvo = models.IntegerField(null=True)

   def __str__(self):
      return "%s %s" % (self.vuz, self.kolichestvo)

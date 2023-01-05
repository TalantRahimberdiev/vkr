
from django.db import models

class Action(models.Model):
   title = models.CharField(max_length=100)
   aim=models.CharField(max_length=300)
   def __str__(self):
      return self.title

class Mission(models.Model):
   title = models.CharField(max_length=100)
   def __str__(self):
      return self.title

class Strategy(models.Model):
   year=models.IntegerField()
   title = models.CharField(max_length=100)
   def __str__(self):
      return self.title

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
   quantity=models.IntegerField()

   def is_upperclass(self):
      return self.STAFF_CHOICES

class History(models.Model):
   year=models.IntegerField()
   events=models.CharField(max_length=300)
   def __str__(self):
      return self.events
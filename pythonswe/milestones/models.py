from django.db import models

# Create your models here.
class Milestones(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    date = models.DateField()
    assigned_to= models.CharField(max_length=100)



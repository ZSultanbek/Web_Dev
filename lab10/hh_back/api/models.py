from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField(max_length=200)
    city = models.CharField(max_length=20)
    address = models.TextField(max_length=200)
    
    def __str__(self):
        
        return self.name
    
class Vacancy(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField(max_length=200)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
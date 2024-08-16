from django.db import models

# Create your models here.
class URL(models.Model):
    long_url = models.URLField(unique=True)
    short_code = models.CharField(max_length=15, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
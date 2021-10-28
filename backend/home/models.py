from django.conf import settings
from django.db import models


class Userdetails(models.Model):
    "Generated Model"
    user_id = models.BigIntegerField()
    first_name = models.CharField(
        max_length=256,
    )
    last_name = models.CharField(
        max_length=256,
    )
    address = models.TextField()

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
    age = models.IntegerField(
        null=True,
        blank=True,
    )


class Sample(models.Model):
    "Generated Model"
    user = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        related_name="sample_user",
    )
    user_details = models.OneToOneField(
        "home.Userdetails",
        on_delete=models.CASCADE,
        related_name="sample_user_details",
    )

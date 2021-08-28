from django.db import models


class Pokemon(models.Model):
    name = models.CharField(max_length=255)
    imageUrl = models.CharField(max_length=255)
    description = models.TextField()
    isFavorite = models.BooleanField(default=False)

    def __str__(self):
        return self.name

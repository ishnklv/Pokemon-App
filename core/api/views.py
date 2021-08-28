import django_filters.rest_framework
from rest_framework import viewsets
from .models import Pokemon
from .serializers import PokemonSerializer
from django_filters.rest_framework import DjangoFilterBackend
from django_filters import rest_framework as filtersio
from rest_framework import filters


class PokemonViewSet(viewsets.ModelViewSet):
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    filterset_fields = ['isFavorite']


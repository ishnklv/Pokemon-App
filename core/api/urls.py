from django.urls import path
from rest_framework import routers
from .views import PokemonViewSet

router = routers.DefaultRouter()

router.register('pokemons', PokemonViewSet)

urlpatterns = router.urls
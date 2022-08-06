from django.urls import include, path

from .views import * 

urlpatterns = [
    path('',include(router.urls)),
    path('api-auth/',include('rest_framework.urls'))
]

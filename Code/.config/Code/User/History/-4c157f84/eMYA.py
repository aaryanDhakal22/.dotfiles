from django.urls import include, path

from .views import * 

urlpatterns = [
    path('students/',student_list, name="list"),
    path()
]

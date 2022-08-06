from django.urls import include, path

from .views import * 

urlpatterns = [
    path('student/',student_list, name="list"),
    path('student/details/:id')
]

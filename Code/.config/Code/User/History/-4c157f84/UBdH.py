from django.urls import include, path

import views

urlpatterns = [
    path('student/',views.student_list, name="list"),
    path('student/details/:id',views.)
]

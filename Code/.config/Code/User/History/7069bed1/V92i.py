from django.urls import path

from .views import student_list, notification_list, student_detail, notification_detail

urlpatterns = [
    path("student/", student_list, name="student_list"),
    path("student/details/<str:studentId>", student_detail, name="student_detail"),
    path("notification/<str:studentId>", notification_list, name="notification_list"),
    path("notification/<str:studentId>/<str:notificationID>", notification_detail, name="notification_detail"),
    # path("transaction/details/<str:date>", transaction_detail, name="transaction_list"),
]

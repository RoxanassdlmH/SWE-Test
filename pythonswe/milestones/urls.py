from django.urls import path

from milestones.views import MilestonesList,MilestonesDetails

urlpatterns = [
    path(route='', view=MilestonesList.as_view()),
    path(route='<int:pk>', view=MilestonesDetails.as_view()),
    
]

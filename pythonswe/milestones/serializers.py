from rest_framework import serializers
from milestones.models import Milestones 

class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestones
        # fields = ['name', 'description', 'date','assigned_to']
        fields= '__all__'
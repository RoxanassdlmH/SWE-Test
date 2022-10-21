from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from milestones.models import Milestones
from milestones.serializers import MilestoneSerializer
from rest_framework import status

# Create your views here.
class MilestonesList(APIView):
    """
    List all Milestones, or create a new snippet.
    """
    def get(self, request, format=None):
       
       
       milestones = Milestones.objects.all()
       serializer = MilestoneSerializer(milestones, many=True)
       return Response(serializer.data)

    
    def post(self, request):
        serializer = MilestoneSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MilestonesDetails(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Milestones.objects.get(pk=pk)
        except Milestones.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        milestones = self.get_object(pk)
        serializer = MilestoneSerializer(milestones)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        milestones = self.get_object(pk)
        serializer = MilestoneSerializer(milestones, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        milestones = self.get_object(pk)
        milestones.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
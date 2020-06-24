from .models import Lead
from .serializers import LeadSerializer
from rest_framework import viewsets, permissions


# Lead ViewSet
class LeadViewSet(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = LeadSerializer
    # OVERRIDING
    def get_queryset(self):
        return self.request.user.leads.all() # get all leads related to a user

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    
# 'perform_create' is called within the create method to call the serializer for creation once it's known the serialization is valid. Specifically, serializer.save()

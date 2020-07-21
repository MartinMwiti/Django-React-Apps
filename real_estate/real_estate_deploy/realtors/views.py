from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions

from .models import Realtor
from .serializers import RealtorSerializer


class RealtorListView(ListAPIView):
    """
    Retrieve list of all realtors in our db fro display in About page
    """
    permission_classes = (permissions.AllowAny, ) # we don't need to have people being authenticated to see About page
    
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer
    pagination_class = None # don't need the data to be paginated since we set the default to be paginated


class RealtorView(RetrieveAPIView):
    """
    class that retrieve a single realtor by ID
    """
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer


class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )

    queryset = Realtor.objects.filter(top_seller=True)
    serializer_class = RealtorSerializer
    pagination_class = None


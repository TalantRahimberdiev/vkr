
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Partner
from .serializers import Partner_Ser

@api_view(['GET'])
def partners_list(request):
    if request.method == 'GET':
        data = Partner.objects.all()
        serializer = Partner_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

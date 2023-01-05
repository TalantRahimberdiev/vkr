
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from schoolarship.models import Stipendia
from schoolarship.serializers import Stipendia_Ser

@api_view(['GET'])
def stipendia(request):
    if request.method == 'GET':
        data = Stipendia.objects.all()
        serializer = Stipendia_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

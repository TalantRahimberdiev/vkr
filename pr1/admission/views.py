
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from admission.models import Admission
from admission.serializers import Admission_Ser


@api_view(['GET'])
def admission_list(request):
    if request.method == 'GET':
        data = Admission.objects.all()
        serializer = Admission_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

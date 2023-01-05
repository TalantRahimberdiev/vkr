
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from glavnoe.models import Action,Mission,Strategy,Staff,History
from glavnoe.serializers import Action_Ser, Mission_Ser, Strategy_Ser, Staff_Ser, History_Ser

@api_view(['GET'])
def action_list(request):
    if request.method == 'GET':
        data = Action.objects.all()
        serializer = Action_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def mission_list(request):
    if request.method == 'GET':
        data = Mission.objects.all()
        serializer = Mission_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def strategy_list(request):
    if request.method == 'GET':
        data = Strategy.objects.all()
        serializer = Strategy_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def staff_list(request):
    if request.method == 'GET':
        data = Staff.objects.all()
        serializer = Staff_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def history_list(request):
    if request.method == 'GET':
        data = History.objects.all()
        serializer = History_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
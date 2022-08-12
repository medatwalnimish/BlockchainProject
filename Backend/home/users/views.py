from rest_framework.views import APIView
from rest_framework.response import Response 
from .serializers import UserSerializers

# Create your views here.

class RegisterAPIView(APIView):
    def post(self,request):
        serializer=UserSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


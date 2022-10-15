from django.forms import ValidationError
from rest_framework import serializers
from teacher.models import Aula, Professor


class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = '__all__'
        
        
class CadastrarAulaSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)
    
    def validade_name(self, value):
        if len(value) < 3:
            raise ValidationError("deve ter pelo menos 3 caracteres")   
        return value
    
class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'
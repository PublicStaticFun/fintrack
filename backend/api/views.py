from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Sum
from .models import Transaction, Category
from .serializers import TransactionSerializer, CategorySerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all().order_by('-date')
    serializer_class = TransactionSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

@api_view(['GET'])
def summary(request):
    """Devuelve ingresos, gastos y balance general."""
    income = Transaction.objects.filter(transaction_type='income').aggregate(total=Sum('amount'))['total'] or 0
    expenses = Transaction.objects.filter(transaction_type='expense').aggregate(total=Sum('amount'))['total'] or 0
    balance = income - expenses
    return Response({
        'income': income,
        'expenses': expenses,
        'balance': balance
    })

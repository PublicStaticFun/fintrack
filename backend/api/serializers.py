from rest_framework import serializers
from .models import Transaction, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Transaction
        fields = ['id', 'title', 'amount', 'date', 'transaction_type', 'category', 'category_name']

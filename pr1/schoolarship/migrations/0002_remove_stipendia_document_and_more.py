# Generated by Django 4.1.1 on 2023-01-03 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schoolarship', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stipendia',
            name='document',
        ),
        migrations.AlterField(
            model_name='stipendia',
            name='description',
            field=models.CharField(max_length=1300),
        ),
        migrations.AlterField(
            model_name='stipendia',
            name='name',
            field=models.CharField(max_length=300, null=True),
        ),
    ]
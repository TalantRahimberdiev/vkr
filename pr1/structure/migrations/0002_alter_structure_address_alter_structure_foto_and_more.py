# Generated by Django 4.1.1 on 2022-12-17 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('structure', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='structure',
            name='address',
            field=models.CharField(max_length=45, null=True),
        ),
        migrations.AlterField(
            model_name='structure',
            name='foto',
            field=models.ImageField(null=True, upload_to='structure'),
        ),
        migrations.AlterField(
            model_name='structure',
            name='nazvanie_korpusa',
            field=models.CharField(max_length=30, null=True),
        ),
    ]

# Generated by Django 4.1.1 on 2023-01-03 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stipendia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('description', models.CharField(max_length=300)),
                ('document', models.FileField(null=True, upload_to='stipendia_materials')),
            ],
        ),
    ]

# Generated by Django 4.1.1 on 2022-09-17 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('instructure', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Trial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=23)),
                ('docs', models.FileField(upload_to='')),
            ],
        ),
    ]

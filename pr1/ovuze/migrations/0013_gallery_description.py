# Generated by Django 4.1.1 on 2022-12-17 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ovuze', '0012_gallery'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='description',
            field=models.CharField(max_length=200, null=True),
        ),
    ]

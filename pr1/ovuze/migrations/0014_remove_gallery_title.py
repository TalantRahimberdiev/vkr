# Generated by Django 4.1.1 on 2022-12-17 07:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ovuze', '0013_gallery_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='gallery',
            name='title',
        ),
    ]

# Generated by Django 4.1.1 on 2022-12-28 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('faculties', '0005_alter_faculty_kafedras'),
    ]

    operations = [
        migrations.AddField(
            model_name='dekanat',
            name='address',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
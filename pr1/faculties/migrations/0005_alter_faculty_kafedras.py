# Generated by Django 4.1.1 on 2022-12-28 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('faculties', '0004_remove_kafedra_faculty_faculty_kafedras'),
    ]

    operations = [
        migrations.AlterField(
            model_name='faculty',
            name='kafedras',
            field=models.ManyToManyField(to='faculties.kafedra'),
        ),
    ]

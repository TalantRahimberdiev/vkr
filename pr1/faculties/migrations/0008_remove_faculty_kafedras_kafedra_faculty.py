# Generated by Django 4.1.1 on 2022-12-28 19:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('faculties', '0007_remove_faculty_address'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='faculty',
            name='kafedras',
        ),
        migrations.AddField(
            model_name='kafedra',
            name='faculty',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='faculties.faculty'),
        ),
    ]

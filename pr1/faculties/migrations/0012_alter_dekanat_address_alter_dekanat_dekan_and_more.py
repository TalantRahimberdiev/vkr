# Generated by Django 4.1.1 on 2023-01-03 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('faculties', '0011_alter_kafedra_phone_alter_kafedra_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dekanat',
            name='address',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='dekanat',
            name='dekan',
            field=models.CharField(max_length=133, null=True),
        ),
        migrations.AlterField(
            model_name='dekanat',
            name='phone',
            field=models.CharField(max_length=137, null=True),
        ),
        migrations.AlterField(
            model_name='faculty',
            name='title',
            field=models.CharField(max_length=500, null=True),
        ),
    ]

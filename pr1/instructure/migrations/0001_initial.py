# Generated by Django 4.1.1 on 2022-09-17 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Instructure',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomer', models.IntegerField()),
                ('title', models.CharField(max_length=70)),
                ('description', models.CharField(max_length=700)),
            ],
        ),
    ]

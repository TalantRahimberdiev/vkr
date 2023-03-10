# Generated by Django 4.1.1 on 2022-12-19 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('statistika', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.CharField(choices=[('Профессора', 'Профессора'), ('Доктора', 'Доктора'), ('Доценты', 'Доценты'), ('Кандидаты', 'Кандидаты'), ('Старшие преподаватели', 'Старшие преподаватели'), ('Преподаватели', 'Преподаватели'), ('Лаборанты', 'Лаборанты')], default='Профессора', max_length=32)),
                ('quantity', models.IntegerField(null=True)),
            ],
        ),
    ]

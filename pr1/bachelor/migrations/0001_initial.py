# Generated by Django 4.1.1 on 2022-09-16 18:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Distance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('distance', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Tuition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tuition', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Specialities',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price', models.IntegerField(null=True)),
                ('distance', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='bachelor.distance')),
                ('fees', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='bachelor.tuition')),
            ],
        ),
        migrations.CreateModel(
            name='Bachelor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=132)),
                ('code', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=700)),
                ('specialities', models.ManyToManyField(to='bachelor.specialities')),
            ],
        ),
    ]

# Generated by Django 4.1.1 on 2022-09-24 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ovuze', '0003_alter_ovuze_fotka'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ovuze',
            name='fotka',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]

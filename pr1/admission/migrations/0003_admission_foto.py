# Generated by Django 4.1.1 on 2022-12-19 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admission', '0002_rename_adress_admission_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='admission',
            name='foto',
            field=models.ImageField(null=True, upload_to='admission'),
        ),
    ]
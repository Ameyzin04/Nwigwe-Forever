# Generated by Django 5.0.4 on 2024-04-09 22:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nwigwe', '0004_guest_not_attending'),
    ]

    operations = [
        migrations.RenameField(
            model_name='guest',
            old_name='Dietary_restriction',
            new_name='dietary_restriction',
        ),
    ]

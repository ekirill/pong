# -*- coding: utf-8 -*-
# Generated by Django 1.9b1 on 2015-11-12 16:18
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_auto_20151112_1359'),
    ]

    operations = [
        migrations.AlterField(
            model_name='setresult',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='results', to='core.Group'),
        ),
    ]

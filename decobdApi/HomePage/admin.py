from django.contrib import admin
from .models import ProductSection,BannerSection,HomePage,BannerImages
# Register your models here.
admin.site.register(ProductSection)
admin.site.register(BannerSection)
admin.site.register(BannerImages)
admin.site.register(HomePage)
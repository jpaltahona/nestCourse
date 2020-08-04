import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { GeocodingModule } from './geocoding/geocoding.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/moku'),
    ProductsModule,
    UsersModule,
    GeocodingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

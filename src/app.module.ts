import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrdersModule } from './orders/orders.module';
import { CoModule } from './orders/co/co.module';

@Module({
  imports: [UserModule, OrdersModule, CoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

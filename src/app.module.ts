import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PaymentModule } from './modules/payments/payments.module';

@Module({
  imports: [PaymentModule],
  controllers: [AppController],
})
export class AppModule {}

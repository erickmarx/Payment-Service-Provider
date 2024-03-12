import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { DebitService } from './services/debit.service';
import { CreditService } from './services/credit.service';
import { RepositoryModule } from 'src/common/repositories/repositories.module';
import { PaymentBuilder } from './builders/payment.builder';
import { CheckService } from './services/check.service';

@Module({
  imports: [RepositoryModule],
  controllers: [PaymentController],
  providers: [
    PaymentService,
    PaymentBuilder,
    DebitService,
    CreditService,
    CheckService,
  ],
})
export class PaymentModule {}

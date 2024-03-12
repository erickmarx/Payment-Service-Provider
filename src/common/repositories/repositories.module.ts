import { Module } from '@nestjs/common';
import { PrismaModule } from '../database/prisma.module';
import { PaymentRepository } from './payment.repository';
import { PaymentRepositoryAbstract } from './interface/payment-repository.interface';

@Module({
  imports: [PrismaModule],
  providers: [
    { provide: PaymentRepositoryAbstract, useClass: PaymentRepository },
  ],
  exports: [PaymentRepositoryAbstract],
})
export class RepositoryModule {}

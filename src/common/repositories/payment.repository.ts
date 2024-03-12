import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import {
  IPaymentCreate,
  IPaymentGet,
  PaymentRepositoryAbstract,
} from './interface/payment-repository.interface';

@Injectable()
export class PaymentRepository implements PaymentRepositoryAbstract {
  constructor(private prismaService: PrismaService) {}

  public async process(data: IPaymentCreate): Promise<void> {
    await this.prismaService.$transaction(async () => {
      const transaction = await this.prismaService.transaction.create({
        data: {
          value: data.value,
          description: data.description,
          paymentMethod: data.paymentMethod,
          numberCard: data.numberCard,
          cardHolder: data.cardHolder,
          expirationDate: data.expirationDate,
          cvv: data.cvv,
        },
      });

      await this.prismaService.payable.create({
        data: {
          transaction: { connect: { id: transaction.id } },
          status: data.status,
          paymentDate: data.paymentDate,
        },
      });
    });
  }

  async check(): Promise<IPaymentGet> {
    const available = await this.prismaService.transaction.aggregate({
      where: { payable: { status: 'PAID' } },
      _sum: { value: true },
    });

    const waitingFunds = await this.prismaService.transaction.aggregate({
      where: { payable: { status: 'WAITING_FUNDS' } },
      _sum: { value: true },
    });

    return {
      available: available._sum.value || 0,
      waitingFunds: waitingFunds._sum.value || 0,
    };
  }
}

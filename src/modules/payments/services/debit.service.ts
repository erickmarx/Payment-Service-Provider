import { Injectable } from '@nestjs/common';
import { IProcessPayment } from '../interface/process-payment.interface';
import { PaymentRepositoryAbstract } from 'src/common/repositories/interface/payment-repository.interface';

@Injectable()
export class DebitService {
  private fee = 0.05;

  constructor(private payableRepository: PaymentRepositoryAbstract) {}

  public async process(data: IProcessPayment): Promise<void> {
    await this.payableRepository.process({
      ...data,
      numberCard: data.numberCard.substring(data.numberCard.length - 4),
      value: this.applyFee(data.value),
      status: 'PAID',
      paymentDate: new Date(),
    });
  }

  private applyFee(value: number): number {
    return value - value * this.fee;
  }
}

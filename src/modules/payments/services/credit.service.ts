import { Injectable } from '@nestjs/common';
import { IProcessPayment } from '../interface/process-payment.interface';
import { PaymentRepositoryAbstract } from 'src/common/repositories/interface/payment-repository.interface';

@Injectable()
export class CreditService {
  private fee = 0.03;

  constructor(private payableRepository: PaymentRepositoryAbstract) {}

  public async process(data: IProcessPayment): Promise<void> {
    await this.payableRepository.process({
      ...data,
      numberCard: data.numberCard.substring(data.numberCard.length - 4),
      value: this.applyFee(data.value),
      status: 'WAITING_FUNDS',
      paymentDate: this.calculatePaymentDate(),
    });
  }

  private applyFee(value: number): number {
    return value - value * this.fee;
  }

  private calculatePaymentDate(): Date {
    const date = new Date();

    date.setDate(date.getDate() + 30);

    return date;
  }
}

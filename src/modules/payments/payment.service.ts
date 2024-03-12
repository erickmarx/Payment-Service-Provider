import { Injectable } from '@nestjs/common';
import { IProcessPayment } from './interface/process-payment.interface';
import { PaymentBuilder } from './builders/payment.builder';
import { ICheckPayment } from './interface/check-payment.interface';
import { CheckService } from './services/check.service';

@Injectable()
export class PaymentService {
  constructor(
    private paymentBuilder: PaymentBuilder,
    private checkService: CheckService,
  ) {}

  public async process(payment: IProcessPayment): Promise<void> {
    const paymentMethodService = this.paymentBuilder.build(
      payment.paymentMethod,
    );

    await paymentMethodService.process(payment);
  }

  public async check(): Promise<ICheckPayment> {
    return await this.checkService.check();
  }
}

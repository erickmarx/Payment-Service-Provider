import { Injectable } from '@nestjs/common';
import { CreditService } from '../services/credit.service';
import { DebitService } from '../services/debit.service';

@Injectable()
export class PaymentBuilder {
  constructor(
    private creditService: CreditService,
    private debitService: DebitService,
  ) {}

  public build(paymentMethod: string): CreditService | DebitService {
    return { credit_card: this.creditService, debit_card: this.debitService }[
      paymentMethod
    ];
  }
}

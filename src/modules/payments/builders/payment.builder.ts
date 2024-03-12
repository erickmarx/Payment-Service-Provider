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
    if (paymentMethod === 'credit_card') {
      return this.creditService;
    }

    if (paymentMethod === 'debit_card') {
      return this.debitService;
    }
  }
}

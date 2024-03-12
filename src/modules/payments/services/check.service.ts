import { Injectable } from '@nestjs/common';
import { PaymentRepositoryAbstract } from 'src/common/repositories/interface/payment-repository.interface';
import { ICheckPayment } from '../interface/check-payment.interface';

@Injectable()
export class CheckService {
  constructor(private payableRepository: PaymentRepositoryAbstract) {}

  async check(): Promise<ICheckPayment> {
    return await this.payableRepository.check();
  }
}

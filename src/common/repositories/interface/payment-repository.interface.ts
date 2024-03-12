export abstract class PaymentRepositoryAbstract {
  abstract process(data: IPaymentCreate): Promise<void>;
  abstract check(): Promise<IPaymentGet>;
}

export interface IPaymentCreate {
  value: number;
  description: string;
  paymentMethod: string;
  numberCard: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
  status: 'WAITING_FUNDS' | 'PAID';
  paymentDate: Date;
}

export interface IPaymentGet {
  available: number;
  waitingFunds: number;
}

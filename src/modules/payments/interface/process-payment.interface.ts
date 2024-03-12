export interface IProcessPayment {
  value: number;
  description: string;
  paymentMethod: 'debit_card' | 'credit_card';
  numberCard: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
}

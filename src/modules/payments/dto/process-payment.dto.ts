import { IsIn, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { IProcessPayment } from '../interface/process-payment.interface';

export class ProcessPaymentDTO implements IProcessPayment {
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  description: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['debit_card', 'credit_card'])
  paymentMethod: 'debit_card' | 'credit_card';

  @IsNotEmpty()
  @IsString()
  @Length(12, 12)
  numberCard: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  cardHolder: string;

  @IsNotEmpty()
  @IsString()
  expirationDate: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 3)
  cvv: string;
}

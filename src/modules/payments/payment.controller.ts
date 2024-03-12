import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ProcessPaymentDTO } from './dto/process-payment.dto';
import { ICheckPayment } from './interface/check-payment.interface';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  async check(): Promise<ICheckPayment> {
    return await this.paymentService.check();
  }

  @Post()
  async process(@Body() body: ProcessPaymentDTO): Promise<void> {
    await this.paymentService.process(body);
  }
}

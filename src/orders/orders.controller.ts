import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ParseUUIDPipe, NotFoundException } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAll(): any {
    return this.ordersService.getAll();
  }
  
@Get('/:id')
getById(@Param('id', new ParseUUIDPipe()) id: string) {
  const ord = this.ordersService.getById(id);
  if (!ord) throw new NotFoundException('Order not found');
  return ord;
}
}
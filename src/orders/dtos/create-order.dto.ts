import { IsNotEmpty, IsUUID, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsUUID()
  @IsString()
  clientId: string;
}
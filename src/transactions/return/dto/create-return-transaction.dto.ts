import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateReturnTransactionDto {
  @IsUUID()
  @IsNotEmpty()
  borrowId: string;
}

import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBorrowTransactionDto {
  @IsUUID()
  @IsNotEmpty()
  bookId: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;
}

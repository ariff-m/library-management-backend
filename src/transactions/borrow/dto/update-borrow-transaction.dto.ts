import { PartialType } from '@nestjs/mapped-types';
import { CreateBorrowTransactionDto } from './create-borrow-transaction.dto';

export class UpdateBorrowTransactionDto extends PartialType(
  CreateBorrowTransactionDto,
) {}

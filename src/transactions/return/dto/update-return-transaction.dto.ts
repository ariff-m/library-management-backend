import { PartialType } from '@nestjs/mapped-types';
import { CreateReturnTransactionDto } from './create-return-transaction.dto';

export class UpdateReturnTransactionDto extends PartialType(
  CreateReturnTransactionDto,
) {}

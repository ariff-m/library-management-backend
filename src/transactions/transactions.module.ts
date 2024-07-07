import { Module } from '@nestjs/common';
import { BorrowModule } from './borrow/borrow.module';
import { ReturnModule } from './return/return.module';

@Module({
  imports: [BorrowModule, ReturnModule],
})
export class TransactionsModule {}

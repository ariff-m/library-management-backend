import { Module } from '@nestjs/common';
import { BorrowTransactionController } from './borrow-transaction.controller';
import { BorrowTransactionService } from './borrow-transaction.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [BorrowTransactionController],
  providers: [BorrowTransactionService, PrismaService],
})
export class BorrowModule {}

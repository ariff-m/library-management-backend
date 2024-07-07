import { Module } from '@nestjs/common';
import { ReturnTransactionController } from './return-transaction.controller';
import { ReturnTransactionService } from './return-transaction.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ReturnTransactionController],
  providers: [ReturnTransactionService, PrismaService],
})
export class ReturnModule {}

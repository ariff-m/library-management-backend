import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateReturnTransactionDto } from './dto/create-return-transaction.dto';

@Injectable()
export class ReturnTransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateReturnTransactionDto) {
    const borrowTransaction = await this.prisma.borrowTransaction.findUnique({
      where: { id: data.borrowId },
      include: { book: true },
    });

    if (!borrowTransaction) {
      throw new NotFoundException(
        `Borrow transaction with ID ${data.borrowId} not found`,
      );
    }

    await this.prisma.book.update({
      where: { id: borrowTransaction.bookId },
      data: { stock: borrowTransaction.book.stock + 1 },
    });

    return this.prisma.returnTransaction.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.returnTransaction.findMany();
  }

  async findOne(id: string) {
    return this.prisma.returnTransaction.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<CreateReturnTransactionDto>) {
    return this.prisma.returnTransaction.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.returnTransaction.delete({ where: { id } });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateReturnTransactionDto } from './dto/create-return-transaction.dto';
import { ReturnTransactionReportDto } from './dto/return-transaction-report.dto';

@Injectable()
export class ReturnTransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async getReturnTransactionReport(): Promise<ReturnTransactionReportDto[]> {
    const transactions = await this.prisma.returnTransaction.findMany({
      select: {
        id: true,
        returnDate: true,
        borrowTransaction: {
          select: {
            borrowDate: true,
            book: {
              select: {
                title: true,
              },
            },
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return transactions.map((transaction) => ({
      id: transaction.id,
      returnDate: transaction.returnDate,
      borrowDate: transaction.borrowTransaction.borrowDate,
      bookTitle: transaction.borrowTransaction.book.title,
      userName: transaction.borrowTransaction.user.name,
    }));
  }

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

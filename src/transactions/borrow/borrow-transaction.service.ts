import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateBorrowTransactionDto } from './dto/create-borrow-transaction.dto';
import { UpdateBorrowTransactionDto } from './dto/update-borrow-transaction.dto';

@Injectable()
export class BorrowTransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBorrowTransactionDto) {
    const book = await this.prisma.book.findUnique({
      where: { id: data.bookId },
    });

    if (!book) {
      throw new NotFoundException(`Book with ID ${data.bookId} not found`);
    }

    if (book.stock <= 0) {
      throw new Error('Book is out of stock');
    }

    await this.prisma.book.update({
      where: { id: data.bookId },
      data: { stock: book.stock - 1 },
    });

    return this.prisma.borrowTransaction.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.borrowTransaction.findMany();
  }

  async findOne(id: string) {
    return this.prisma.borrowTransaction.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateBorrowTransactionDto) {
    return this.prisma.borrowTransaction.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.borrowTransaction.delete({ where: { id } });
  }
}

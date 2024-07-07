import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BorrowTransactionService } from './borrow-transaction.service';
import { CreateBorrowTransactionDto } from './dto/create-borrow-transaction.dto';

@Controller('borrow-transactions')
export class BorrowTransactionController {
  constructor(private readonly service: BorrowTransactionService) {}

  @Post()
  async create(@Body() createDto: CreateBorrowTransactionDto) {
    return this.service.create(createDto);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: Partial<CreateBorrowTransactionDto>,
  ) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

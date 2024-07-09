import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { BorrowTransactionService } from './borrow-transaction.service';
import { CreateBorrowTransactionDto } from './dto/create-borrow-transaction.dto';
import { BorrowTransactionReportDto } from './dto/borrow-transaction-report.dto';
import { TransformResponseInterceptor } from 'src/common/transform-response.interceptor';

@Controller('borrow-transactions')
@UseInterceptors(TransformResponseInterceptor)
export class BorrowTransactionController {
  constructor(private readonly service: BorrowTransactionService) {}

  @Get('report')
  async getBorrowTransactionReport(): Promise<BorrowTransactionReportDto[]> {
    return this.service.getBorrowTransactionReport();
  }

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

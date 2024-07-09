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
import { ReturnTransactionService } from './return-transaction.service';
import { CreateReturnTransactionDto } from './dto/create-return-transaction.dto';
import { ReturnTransactionReportDto } from './dto/return-transaction-report.dto';
import { TransformResponseInterceptor } from 'src/common/transform-response.interceptor';

@Controller('return-transactions')
@UseInterceptors(TransformResponseInterceptor)
export class ReturnTransactionController {
  constructor(private readonly service: ReturnTransactionService) {}

  @Get('report')
  async getReturnTransactionReport(): Promise<ReturnTransactionReportDto[]> {
    return this.service.getReturnTransactionReport();
  }

  @Post()
  async create(@Body() createDto: CreateReturnTransactionDto) {
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
    @Body() updateDto: Partial<CreateReturnTransactionDto>,
  ) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

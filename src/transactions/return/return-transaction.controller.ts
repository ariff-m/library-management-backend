import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ReturnTransactionService } from './return-transaction.service';
import { CreateReturnTransactionDto } from './dto/create-return-transaction.dto';

@Controller('return-transactions')
export class ReturnTransactionController {
  constructor(private readonly service: ReturnTransactionService) {}

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

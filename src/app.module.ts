import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [BooksModule, UsersModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

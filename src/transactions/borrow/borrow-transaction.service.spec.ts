import { Test, TestingModule } from '@nestjs/testing';
import { BorrowTransactionService } from './borrow-transaction.service';

describe('BorrowTransactionService', () => {
  let service: BorrowTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorrowTransactionService],
    }).compile();

    service = module.get<BorrowTransactionService>(BorrowTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

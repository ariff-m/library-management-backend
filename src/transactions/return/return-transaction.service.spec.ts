import { Test, TestingModule } from '@nestjs/testing';
import { ReturnTransactionService } from './return-transaction.service';

describe('ReturnTransactionService', () => {
  let service: ReturnTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReturnTransactionService],
    }).compile();

    service = module.get<ReturnTransactionService>(ReturnTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

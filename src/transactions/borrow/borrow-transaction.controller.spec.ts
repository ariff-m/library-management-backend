import { Test, TestingModule } from '@nestjs/testing';
import { BorrowTransactionController } from './borrow-transaction.controller';

describe('BorrowTransactionController', () => {
  let controller: BorrowTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BorrowTransactionController],
    }).compile();

    controller = module.get<BorrowTransactionController>(
      BorrowTransactionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ReturnTransactionController } from './return-transaction.controller';

describe('ReturnTransactionController', () => {
  let controller: ReturnTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturnTransactionController],
    }).compile();

    controller = module.get<ReturnTransactionController>(
      ReturnTransactionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

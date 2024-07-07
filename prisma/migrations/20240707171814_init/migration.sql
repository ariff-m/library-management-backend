-- AddForeignKey
ALTER TABLE `BorrowTransaction` ADD CONSTRAINT `BorrowTransaction_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BorrowTransaction` ADD CONSTRAINT `BorrowTransaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReturnTransaction` ADD CONSTRAINT `ReturnTransaction_borrowId_fkey` FOREIGN KEY (`borrowId`) REFERENCES `BorrowTransaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UploadedFile,
  UseInterceptors,
  NotFoundException,
  Res,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs-extra';
import { Response } from 'express';
import { TransformResponseInterceptor } from 'src/common/transform-response.interceptor';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Post('upload/:id')
  @UseInterceptors(TransformResponseInterceptor)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: async (req, file, cb) => {
          const uploadPath = join(__dirname, '../../../uploads/books');
          await fs.ensureDir(uploadPath);
          console.log('Destination Path:', uploadPath);
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const book = await this.booksService.findOne(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    const fileUrl = `${file.filename}`;
    console.log('File URL:', fileUrl);
    return this.booksService.updateImageUrl(id, fileUrl);
  }

  @Get('uploads/:filename')
  async serveFile(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(__dirname, `../../../uploads/books/${filename}`);
    console.log('Requested File Path:', filePath);
    res.sendFile(filePath);
  }

  @Get()
  @UseInterceptors(TransformResponseInterceptor)
  async findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @UseInterceptors(TransformResponseInterceptor)
  async findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(TransformResponseInterceptor)
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @UseInterceptors(TransformResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}

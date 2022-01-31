import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Cat } from './car-interface';
import { CatsService } from './cats-service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  async findAll(@Req() req: Request): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param() params): string {
    return 'This is a cat string';
  }

  //passthrough true to use native response object and have the rest of nest frameork.
  @Post()
  async create(
    @Body() createCatDto: CreateCatDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    // res.status(HttpStatus.CREATED).json([]);
    this.catService.create(createCatDto);
  }

  @Patch()
  async update(@Param() id: string, @Body() CreateCatDto: CreateCatDto) {
    return 'someting';
  }

  @Delete()
  async delete(@Param() id: string) {
    return 'someting';
  }
}

//sub-domain routing

// @Controller({ host: 'http://localhost:3000/admin' })
// export class AdminController {
//   @Get()
//   index(): string {
//     return 'Admin page';
//   }
// }

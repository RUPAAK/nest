import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() req: Request): string {
    return 'This is a cat string';
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param() params): string {
    console.log(params);
    return 'This is a cat string';
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    return 'This is Post String';
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

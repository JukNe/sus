import { Body, Controller, Get, Post } from '@nestjs/common';
import { Session } from './session.entity';
import { SessionService } from './session.service';

@Controller('/session')
export class SessionController {
  constructor(private SessionService: SessionService) {}

  @Get('/findAll')
  async findAll() {
    return this.SessionService.findAll();
  }

  @Post('/add')
  async addSession(@Body() body: Session) {
    return this.SessionService.addOne(body);
  }
}

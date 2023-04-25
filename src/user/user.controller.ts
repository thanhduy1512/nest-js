import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
  }
  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUser(param);
  }
  @Post()
  store(@Req() req: Request) {
    return this.userService.create(req);
  }
  @Patch('/:userId')
  update(@Req() req: Request, @Param() param: { userId: number }) {
    return this.userService.update(req, param);
  }
  @Delete()
  delete(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}

import { Body, Controller, Patch, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  updateProfile(
    @Req() req: any,
    @Body()
    body: {
      estado?: string;
      area?: string;
      nivel?: string;
      salarioMin?: number;
    },
  ) {
    return this.usersService.updateProfile(req.user.sub, body);
  }
}

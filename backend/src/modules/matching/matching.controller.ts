import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { MatchingService } from './matching.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('matching')
export class MatchingController {
  constructor(private readonly matchingService: MatchingService) {}

  @Post('generate')
  async generate(@Req() req: any) {
    return this.matchingService.generateMatches(req.user.sub);
  }

  @Get()
  async list(@Req() req: any) {
    return this.matchingService.getMatches(req.user.sub);
  }
}

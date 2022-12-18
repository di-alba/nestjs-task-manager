import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  @Post('/signup')
  signUp(@Body(ValidationPipe) credentials: AuthCredentialsDto) {
    this.authService.signUp(credentials);
  }
}
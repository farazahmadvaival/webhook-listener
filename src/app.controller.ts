import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('dockerhub-webhook')
  async webHook(@Body() body:any){

    //verify call back
    const result = await this.appService.fetch(body.callback_url, body);
    console.log(result);
    
    return this.appService.webhook(body);

  }
}

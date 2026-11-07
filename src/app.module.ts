import { Controller, Get, Module } from '@nestjs/common';

@Controller('hola')
class AppController {
  @Get()
  sayHello(): { mensaje: string } {
    return { mensaje: 'Hola Santiago' };
  }
}

@Module({
  controllers: [AppController],
})
export class AppModule {}

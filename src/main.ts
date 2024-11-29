import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS ruxsatini yoqish
  app.enableCors({
    origin: '*', // Hamma domenlarga ruxsat berish (faqat lokal test uchun)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Ruxsat etilgan metodlar
    credentials: false, // Agar cookie yoki token kerak bo‘lsa, true qilib qo‘ying
  });

  // Global prefiks qo‘shish
  app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log('Server running at http://localhost:3000/api');
}
bootstrap();

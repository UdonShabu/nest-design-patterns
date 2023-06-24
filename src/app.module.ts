import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './prototype/report/report.module';
import { PostModule } from './prototype/post/post.module';

@Module({
  imports: [ReportModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

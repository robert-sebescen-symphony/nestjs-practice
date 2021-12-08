import { Module } from '@nestjs/common';
import { LoggingModule } from '@app/logging';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoryService } from './repository/repository.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [LoggingModule, UserModule],
  controllers: [AppController],
  providers: [AppService, RepositoryService],
})
export class AppModule {}

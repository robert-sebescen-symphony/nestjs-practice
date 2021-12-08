import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingService {
  log() {
    console.log('LOGGG');
  }
}

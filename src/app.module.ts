import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxModule } from './tax/tax.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TaxModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

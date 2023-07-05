import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [AuthModule, PrismaModule, ConfigurationModule],
})
export class AppModule {}

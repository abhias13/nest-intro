import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './products/entity/company.entity';
import { Product1 } from './products/entity/product1.entity';
import { Product2 } from './products/entity/product2.entity';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({ 
      type: 'mssql',
      host: '20.198.100.95',
      port: 1433,
      username: 'NS2PDev',
      password: 'Tpspl@123',
      database: 'DummyData',
      entities: [Product1,Product2,Company],
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      },
    }),
  ],
  controllers: [CatsController],
}) 
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './NestJsApi/entity/company.entity';
import { Customer } from './NestJsApi/entity/customer.entity';
import { Product } from './NestJsApi/entity/product.entity';
import { CompanyModule } from './NestJsApi/Modules/company.module';
import { CustomersModule } from './NestJsApi/Modules/customer.module';
import { ProductsModule } from './NestJsApi/Modules/products.module';

@Module({
  imports: [
    ProductsModule,CompanyModule,CustomersModule,
    TypeOrmModule.forRoot({ 
      type: 'mssql',
      host: '20.198.100.95',
      port: 1433,
      username: 'NS2PDev',
      password: 'Tpspl@123',
      database: 'DummyData',
      entities: [Product,Company,Customer],
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      },
    }),
  ],
}) 
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './products/entity/company.entity';
import { Product } from './products/entity/product.entity';
import { CompanyModule } from './products/Modules/company.module';
import { ProductsModule } from './products/Modules/products.module';

@Module({
  imports: [
    ProductsModule,CompanyModule,
    TypeOrmModule.forRoot({ 
      type: 'mssql',
      host: '20.198.100.95',
      port: 1433,
      username: 'NS2PDev',
      password: 'Tpspl@123',
      database: 'DummyData',
      entities: [Product,Company],
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      },
    }),
  ],
}) 
export class AppModule {}

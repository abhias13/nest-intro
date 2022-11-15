import { Body, Controller, Post, Get, Param, Delete, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateProductsDto } from "../ViewModel/CreateProducts.dto";
import { ProductsService } from "../Services/products.service";

@ApiTags('Products')
@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService) {

    }
    @Post()
    async addproduct(@Body() createproductdto: CreateProductsDto)
         {
        return await this.productsService.insertProduct(createproductdto);
    }

    @Get() 
    async getProducts(){
        return await this.productsService.getAllItem();
    }

    @Get('id/:id')
    async getProduct(@Param('id') prodId: number) {
        return await this.productsService.getSingleProduct(prodId);
    }

    @Put('id/:id')
     async updateProduct(@Param('id') prodId: number, 
         @Param('title') prodTitle: string, 
         @Param('description') prodDesc: string, 
         @Param('price') prodPrice: number,) {
        const updateProduct = {
            title:prodTitle,
            description:prodDesc,
            Price: prodPrice
        }
        const query = {
            id: prodId,
        }
        return await this.productsService.update(query, updateProduct);
    }

    @Delete(':id')
    async removeProduct(@Param('id') prodId: number){
      return await this.productsService.deleteItem(prodId);
    }

}   
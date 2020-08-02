import { Controller , Get, Post, Put, Delete , Res, HttpStatus, Body, Param , 
    NotFoundException, Query} from '@nestjs/common';
import { CreateProductDTO } from './dto/products.dto';
import {ProductsService} from './products.service';

@Controller('products')
export class ProductsController {

    constructor( private productService : ProductsService ){}

    @Get()
    async getProducts(@Res() res){
        let products = await this.productService.getProducts();
        return res.status( HttpStatus.OK).json({
            message: 'Products List',
            products: products
        })
        
    }
    @Post('/create')
    async createProduc(@Res() res, @Body() createProductDTO: CreateProductDTO){
        console.log(createProductDTO);
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: "Received",
            product: product    
        })
    }
    @Get('/:id')
    async getProduct(@Res() res, @Param('id') productID){
        const product = await this.productService.getProduct(productID);
        if(!product){
            throw new NotFoundException("Product Id not Found");
        }else{
            return res.status( HttpStatus.OK ).json(product)
        }
    }
    @Delete('/delete')
    async deleteProduct( @Res() res, @Query('productID') producID ){
        const deleteProduct = await this.productService.deleteProduct(producID);
        if(!deleteProduct)throw new NotFoundException("Product No Exits");
        return res.status( HttpStatus.OK ).json({message: "Product Delete"})
    }
    @Put('/update')
    async updateProduct(@Res() res , @Body() createProductDtop: CreateProductDTO, 
        @Query('productID') producID ){
        const updatePr = await this.productService.updateProduct(producID , createProductDtop);
        if(!updatePr)throw new NotFoundException("Product Not Update");
        return res.status( HttpStatus.OK ).json({message: "Product Delete", product: updatePr})
    }
}

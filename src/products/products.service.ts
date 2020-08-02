import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Product} from './interfaces/product.interface';
import { CreateProductDTO } from './dto/products.dto';

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel('Product') private readonly productModel:  Model <Product>
    ){}
    async getProducts() : Promise< Product[] >{
        const products = await this.productModel.find();
        return products
    };
    async getProduct(ProductID: String) : Promise <Product> {
        const product = await this.productModel.findById(ProductID);
        return product
    };
    async createProduct(createProductDTO: CreateProductDTO): Promise <Product> {
        const product = new this.productModel(createProductDTO);
        return product.save();
    };
    async deleteProduct(ProductID: String) : Promise <Product> {
        const product = await this.productModel.findByIdAndDelete(ProductID);
        return product
    };
    async updateProduct(ProductID: String, createProductDTO: CreateProductDTO) : Promise <Product> {
        const product = await this.productModel.findByIdAndUpdate(ProductID, createProductDTO, { new: true } );
        return product
    };
};
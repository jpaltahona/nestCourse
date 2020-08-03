import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {User} from './interfaces/user.interfaces';
import {CreateUsertDTO} from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel("users") private readonly userModel: Model <User>
    ){};
    async createUser( user: CreateUsertDTO ): Promise <User>{
       const newUser = await new this.userModel(user);
       return newUser.save()
    };
    async getUser(userID: String) : Promise <User> {
        const user = await this.userModel.findById(userID);
        return user
    }
};
import { Controller , Get, Post, Put, Delete , Res, HttpStatus, 
    Body, Param , NotFoundException, Query
} from '@nestjs/common';

import {UsersService} from './users.service';
import {CreateUsertDTO} from './dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(
        private userService : UsersService
    ){};
    @Post('/create')
    async createUser(@Res() res,  @Body() createUser: CreateUsertDTO ){
        const userNew = await this.userService.createUser(createUser);
        return res.status(HttpStatus.OK).json({
            message: "created",
            user: userNew    
        })
    }
    @Get('/')
    async getUSer(@Res() res, @Query('id') userID){
        const user = await this.userService.getUser(userID);
        return res.status(HttpStatus.OK).json(user);
    }
}

import { Get, Controller, HttpStatus, Post, Body, Res} from '@nestjs/common';
import {GeocodingService} from './geocoding.service';

@Controller('geocoding')
export class GeocodingController {
    constructor(private readonly services: GeocodingService) {}
    @Get()
    async root() {
        const response = await this.services.search();
        return response;
    };
    @Post("/directions")
    async searcDirections(@Res() res, @Body() geoData ){
        const locations = await this.services.searchDiction(geoData)
        return res.status(HttpStatus.OK).json(locations)
    }
}
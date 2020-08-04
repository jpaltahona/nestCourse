import { Get, Controller, HttpService } from '@nestjs/common';
import {GeocodingService} from './geocoding.service';

@Controller('geocoding')
export class GeocodingController {
    constructor(private readonly services: GeocodingService) {}
    @Get()
    async root() {
        const response = await this.services.search();
        return response;
    }
}
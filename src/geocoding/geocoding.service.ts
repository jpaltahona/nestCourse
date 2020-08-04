import { Injectable , HttpService} from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class GeocodingService {
    constructor(
        private readonly http: HttpService
    ){}; 

    async search(){
        const response = await this.http.get('https://api.github.com/users/januwA').toPromise();
        return response.data;
    }
}

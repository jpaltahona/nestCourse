import { Injectable , HttpService} from '@nestjs/common';
import { GeoCodignDTO } from './dto/geocodig.dto';
import { Directions } from './interfases/searchDirection.interfases';

const tokenAPI = "pk.eyJ1IjoianBhbHRhaG9uYSIsImEiOiJja2Qxb3FpMnQwNWtmMnhueDFoeWNqdXA0In0.GpHphk05qXvdmu0W2iuPig";

@Injectable()
export class GeocodingService {
    constructor(
        private readonly http: HttpService
    ){}; 

    async search(){
        const response = await this.http.get('https://api.github.com/users/januwA').toPromise();
        return response.data;
    }
    async searchDiction( geocoding: GeoCodignDTO) {
        console.log(geocoding);
        const { latitud, longitud, query } = geocoding;
        let location = [latitud,longitud]
        const data = await this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/centro%20comercial%20bue.json?limit=5&language=en-ES&access_token=${tokenAPI}&proximity=${location}`).toPromise()
        const info = await data.data
        return info
    }
}

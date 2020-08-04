import { Module , HttpModule} from '@nestjs/common';
import { GeocodingController } from './geocoding.controller';
import { GeocodingService } from './geocoding.service';

@Module({
  imports: [HttpModule],
  controllers: [GeocodingController],
  providers: [GeocodingService]
})
export class GeocodingModule {}

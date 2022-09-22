import {Observable, of} from 'rxjs';
import {AboutInterface} from '../interfaces/about.interface';

export const aboutCollege$: Observable<AboutInterface>  = of({
    id: 1,
    name: 'Львовский колледж транспортной инфраструктуры',
    photo: 'http://photos.wikimapia.org/p/00/03/27/47/61_big.jpg',
    about: '<p> Львовский национальный университет имени Ивана Франко — один из старейших университетов Восточной Европы и старейший ' +
        'университет Украины. Один из ведущих вузов страны. В прошлом носил название Львовский университет </p>',
    media_type: 22,
    vimeo_video_id: 45
});

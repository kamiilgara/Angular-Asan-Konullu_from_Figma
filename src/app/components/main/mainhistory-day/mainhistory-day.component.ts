import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mainhistory-day',
  templateUrl: './mainhistory-day.component.html',
  styleUrls: ['./mainhistory-day.component.css']
})
export class MainhistoryDayComponent {
  faArrowRight = faArrowRight;


  dailyHistory = [
    {
        id : '0',
        header : 'Azərbaycanlıların Soyqırımı Günü',
        time : '31 Mart, 1918',
        text : '1918-ci ilin 30 mart və 3 aprel tarixləri arasında Bakı şəhərində və Bakı quberniyasının müxtəlif bölgələrində, eləcə də Şamaxı, Quba, Xaçmaz, Lənkəran, Hacıqabul, Salyan, Zəngəzur, Qarabağ, Naxçıvan və digər ərazilərdə Bakı Soveti və Daşnaksütundan olan erməni silahlı dəstələrinin azərbaycanlılara qarşı törətdikləri qırğın. '
    } ,
    {
        id : '1',
        header : 'Seçkilərdə səs verən ilk afro-amerikalı',
        time : '31 Mart, 1870',
        text : 'İlk dəfə bir afroamerikalı seçici səs verdi. Thomas Mundy Peterson, ABŞ Konstitusiyasında 15-ci Dəyişikliyin yeni qəbul edilmiş müddəalarına əsasən seçkilərdə səs verən ilk Afro-Amerikalı idi. Bu, afro-amerikalılara bərabər hüquqların verilməsində böyük bir uğur idi. '
    } ,
    {
        id : '2',
        header : 'Azərbaycanlıların Soyqırımı Günü',
        time : '31 Mart, 1918',
        text : '1918-ci ilin 30 mart və 3 aprel tarixləri arasında Bakı şəhərində və Bakı quberniyasının müxtəlif bölgələrində, eləcə də Şamaxı, Quba, Xaçmaz, Lənkəran, Hacıqabul, Salyan, Zəngəzur, Qarabağ, Naxçıvan və digər ərazilərdə Bakı Soveti və Daşnaksütundan olan erməni silahlı dəstələrinin azərbaycanlılara qarşı törətdikləri qırğın. '
    } ,
    {
        id : '3',
        header : 'Seçkilərdə səs verən ilk afro-amerikalı',
        time : '31 Mart, 1870',
        text : 'İlk dəfə bir afroamerikalı seçici səs verdi. Thomas Mundy Peterson, ABŞ Konstitusiyasında 15-ci Dəyişikliyin yeni qəbul edilmiş müddəalarına əsasən seçkilərdə səs verən ilk Afro-Amerikalı idi. Bu, afro-amerikalılara bərabər hüquqların verilməsində böyük bir uğur idi. '
    }
  ];

  customOptions: any = {
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['←', '→'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

}

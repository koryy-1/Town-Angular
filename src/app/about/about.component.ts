import { Component } from '@angular/core';
import { AboutInfo } from '../about-model';

@Component({
  selector: 'about-app',
  templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'about';

  aboutInfo: AboutInfo = 
  {
    shortInfo: localStorage.getItem('shortInfo') === null
      ? 'Меня зовут Илья, 21 y.o., родился в Славгороде, собственно, сайт этому городу и посвящен.'
      : localStorage.getItem('shortInfo'),

    currentPlaceOfStudy: localStorage.getItem('currentPlaceOfStudy') === null
    ? 'Учусь в СибГУТИ, на факультете АЭС по специальности информационная безопасность телекоммуникационных систем.'
    : localStorage.getItem('currentPlaceOfStudy'),

    pastPlaceOfStudy: localStorage.getItem('pastPlaceOfStudy') === null
    ? 'Окончил ВСШ №35.'
    : localStorage.getItem('pastPlaceOfStudy'),

    currentPlaceOfWork: localStorage.getItem('currentPlaceOfWork') === null
    ? 'Сейчас стажируюсь в AT Consulting Восток'
    : localStorage.getItem('currentPlaceOfWork'),

    mainActivity: localStorage.getItem('mainActivity') === null
    ? 'написание программ и автоматизация различного рода рутинных задач.'
    : localStorage.getItem('mainActivity'),

    favoriteThings: localStorage.getItem('favoriteThings') === null
    ? `мне нравится собирать компы.
    а еще мне нравится пицца, люблю пить энергетики, офк пью их редко.
    люблю когда бабки появляются из воздуха с помощью моих алгоритмов.`
    : localStorage.getItem('favoriteThings')
  }
}

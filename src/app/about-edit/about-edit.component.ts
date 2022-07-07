import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AboutInfo } from '../about-model';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit, OnChanges {
  // aboutInfo: AboutInfo = JSON.parse(localStorage.getItem('aboutInfo') as string)

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  saveChanges() {
    // localStorage.setItem('aboutInfo', JSON.stringify(this.aboutInfo))
    localStorage.setItem('shortInfo', this.aboutInfo.shortInfo as string)
    localStorage.setItem('currentPlaceOfStudy', this.aboutInfo.currentPlaceOfStudy as string)
    localStorage.setItem('pastPlaceOfStudy', this.aboutInfo.pastPlaceOfStudy as string)
    localStorage.setItem('currentPlaceOfWork', this.aboutInfo.currentPlaceOfWork as string)
    localStorage.setItem('mainActivity', this.aboutInfo.mainActivity as string)
    localStorage.setItem('favoriteThings', this.aboutInfo.favoriteThings as string)
    this.router.navigate(['/aboutMe'])
  }
}

import {Component, AfterViewInit} from '@angular/core';
import Glide from 'node_modules/@glidejs/glide/dist/glide.min';

declare function require(path: string);
const newIcon = require('../../../assets/svg/Services-New-Icon.svg');
const allIcon = require('../../../assets/svg/Services-All-Icon.svg');
const mostUsedIcon = require('../../../assets/svg/Services-Most-Used-Icon.svg');
const individualsIcon = require('../../../assets/svg/Services-Individuals-Icon.svg');
const investorsIcon = require('../../../assets/img/Services-Investors-Icon.png');

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})

export class ServicesComponent implements AfterViewInit {
  serviceActive = 1;
  services: object[] = [
    {
      name: 'خدمات جديدة',
      img: newIcon
    },
    {
      name: 'جميع الخدمات',
      img: allIcon
    },
    {
      name: 'الخدمات الأكثر إستخداما',
      img: mostUsedIcon
    },
    {
      name: 'خدمات الأفراد',
      img: individualsIcon
    },
    {
      name: 'خدمات قطاع الأعمال',
      img: investorsIcon
    }
  ];
  ngAfterViewInit() {
    new Glide('#services', {
      autoplay: 3000,
      perView: Math.round(window.innerWidth * .35 / 100),
      bound: true
    }).mount();
  }
}

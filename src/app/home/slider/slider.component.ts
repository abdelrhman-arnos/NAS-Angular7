import {Component, AfterViewInit} from '@angular/core';
import Glide from 'node_modules/@glidejs/glide/dist/glide.min';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})

export class SliderComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Glide('#slider', {
      type: 'carousel',
      autoplay: 4000,
      animationDuration: 1000
    }).mount();
  }
}

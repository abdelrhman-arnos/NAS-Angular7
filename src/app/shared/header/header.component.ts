import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  scroll = window.scrollY;
  collapse = true;
  links: string[] = [
    ' الدعم والمساندة',
    'المركز الاعلامي',
    'مكتبة المؤسسة',
    'دليل الخدمات',
    'الأخبار',
    'عن المؤسسة'
  ];
  ngOnInit() {
    window.addEventListener('scroll', () => this.scroll = window.scrollY);
  }
}

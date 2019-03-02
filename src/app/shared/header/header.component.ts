import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent {
  links: string[] = [
    ' الدعم والمساندة',
    'المركز الاعلامي',
    'مكتبة المؤسسة',
    'دليل الخدمات',
    'الأخبار',
    'عن المؤسسة'
  ];
}

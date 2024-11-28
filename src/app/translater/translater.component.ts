import { Component } from '@angular/core';

import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translater',
  standalone: true,
  imports: [RouterModule, CommonModule,TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'ru', 'tj']);
    this.translate.setDefaultLang('tj');
  }
  selectedLanguage = "tj";  // Язык по умолчанию
  onLanguageChange(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language); // Меняем язык с помощью ngx-translate

  }
}

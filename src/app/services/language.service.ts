import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    const defaultLang = 'pt';
    this.translate.setDefaultLang(defaultLang);
    const browserLang = this.translate.getBrowserLang();
    const selectedLang = browserLang ? browserLang.match(/en|pt/) ? browserLang : defaultLang : defaultLang;
    this.translate.use(selectedLang);
  }

  switchLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    this.translate.use(newLang);
  }
}

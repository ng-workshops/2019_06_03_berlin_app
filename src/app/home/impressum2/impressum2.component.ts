import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-impressum2',
  templateUrl: './impressum2.component.html',
  styleUrls: ['./impressum2.component.scss']
})
export class Impressum2Component {
  private today = new Date();

  lastUpdatedAt = new Date(2019, 5, 3, 10, 10, 10);
  days =
    (this.today.getTime() - this.lastUpdatedAt.getTime()) /
    (1000 * 60 * 60 * 24);
  user = {
    name: 'Homer Simpsons'
  };

  fromCode$ = this.translate.onLangChange.pipe(
    switchMap(() => this.translate.get('impressum.title'))
  );

  constructor(private translate: TranslateService) {}

  useLanguage(language: string) {
    this.translate.use(language);
  }
}

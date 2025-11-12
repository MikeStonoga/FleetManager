import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { VolvoColors } from '@commons/colors';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkIcon, SdkIconConfiguration } from '@sdk/icon/sdk-icon';

@Component({
  selector: 'language-selector',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule, MatButtonModule, SdkIcon],
  templateUrl: './language-selector.html',
  styleUrls: ['./language-selector.scss'],
})
export class LanguageSelector {
  readonly service = inject(TranslationService);
  public expandIcon = new SdkIconConfiguration({
    name: 'expand_more',
    color: VolvoColors.White
  });

  /** Retorna o caminho da bandeira */
  getFlagPath(code: string): string {
    const base = '/flags';
    return `${base}/${code}.svg`;
  }

  /** Ao clicar em uma nova língua */
  onLanguageSelected(code: string): void {
    if (code !== this.service.currentLanguage) {
      this.service.setLanguage(code);
    }
  }
}

import { Provider } from "@angular/core";
import { BrazilianPortugueseStrategy } from "./languages/brazilian-portuguese.translation";
import { ChineseStrategy } from "./languages/chinese.translation";
import { DutchStrategy } from "./languages/dutch.strategy";
import { EnglishStrategy } from "./languages/english.translation";
import { FrenchStrategy } from "./languages/french.translation";
import { GermanStrategy } from "./languages/german.translation";
import { HindiStrategy } from "./languages/hindi.strategy";
import { ItalianStrategy } from "./languages/italian.translation";
import { PolishStrategy } from "./languages/polish.translation";
import { SpanishStrategy } from "./languages/spanish.translation";
import { SwedishStrategy } from "./languages/swedish.translation";
import { TRANSLATION_STRATEGIES } from "./translation.strategy";

export const APP_TRANSLATIONS: Provider[] = [
    { provide: TRANSLATION_STRATEGIES, useClass: BrazilianPortugueseStrategy, multi: true },
    { provide: TRANSLATION_STRATEGIES, useClass: EnglishStrategy, multi: true },
    { provide: TRANSLATION_STRATEGIES, useClass: SwedishStrategy, multi: true },
    { provide: TRANSLATION_STRATEGIES, useClass: SpanishStrategy, multi: true },
    { provide: TRANSLATION_STRATEGIES, useClass: FrenchStrategy, multi: true },
    { provide: TRANSLATION_STRATEGIES, useClass: ItalianStrategy, multi: true },
    { provide: TRANSLATION_STRATEGIES, useClass: GermanStrategy, multi: true },
    { provide: TRANSLATION_STRATEGIES, useClass: ChineseStrategy, multi: true },
    { provide: TRANSLATION_STRATEGIES, useClass: PolishStrategy, multi: true },
    { provide: TRANSLATION_STRATEGIES, useClass: DutchStrategy, multi: true },
    { provide: TRANSLATION_STRATEGIES, useClass: HindiStrategy, multi: true },

]

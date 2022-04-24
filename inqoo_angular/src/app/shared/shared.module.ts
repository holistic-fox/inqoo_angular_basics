import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InqooButtonComponent } from './components/inqoo-button/inqoo-button.component';
import { InqooBadgeComponent } from './components/inqoo-badge/inqoo-badge.component';
import { InqooAccordionItemComponent } from './components/inqoo-accordion-item/inqoo-accordion-item.component';
import { InqooAccordionComponent } from './components/inqoo-accordion/inqoo-accordion.component';
import { InqooClockComponent } from './components/inqoo-clock/inqoo-clock.component';



@NgModule({
  declarations: [
    InqooButtonComponent,
    InqooBadgeComponent,
    InqooAccordionItemComponent,
    InqooAccordionComponent,
    InqooClockComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InqooButtonComponent,
    InqooBadgeComponent,
    InqooAccordionItemComponent,
    InqooAccordionComponent,
    InqooClockComponent,
  ]
})
export class SharedModule { }

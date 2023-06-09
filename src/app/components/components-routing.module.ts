import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tooltip } from 'chart.js';
import { AccordionComponent } from '../core/partials/accordion';
import { AccordianComponent } from './accordian/accordian.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChartComponent } from './chart/chart.component';
import { ComponentComponent } from './component.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ListComponent } from './list/list.component';
import { IndexNavbarComponent } from './navbars/index-navbar/index-navbar.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentComponent,
  },
  {
    path: 'navbars',
    component: IndexNavbarComponent,
  },
  {
    path: 'accordian',
    component: AccordianComponent,
  },
  {
    path: 'buttons',
    component: ButtonComponent,
  },
  {
    path: 'charts',
    component: ChartComponent,
  },
  {
    path: 'breadcrumbs',
    component: BreadcrumbComponent,
  },
  {
    path: 'alert',
    component: AlertsComponent,
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
  },
  {
    path: 'badge',
    component: BadgeComponent,
  },
  {
    path: 'progress-bar',
    component: ProgressBarComponent,
  },
  {
    path: 'popover',
    component: PopoverComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'carousel',
    component: CarouselComponent,
  },
  {
    path: 'dropdown',
    component: DropdownComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}

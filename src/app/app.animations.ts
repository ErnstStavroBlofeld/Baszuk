import { animate, query, style, transition, trigger, stagger } from '@angular/animations';

export const RouteAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter section', [
      style({
        opacity: 0,
        transform: 'translateY(10%)'
      }),
      stagger('400ms', animate('500ms ease', style({
        opacity: 1,
        transform: 'translateY(0)'
      })))
    ])
  ])
]);

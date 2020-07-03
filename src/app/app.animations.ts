import { animate, query, style, transition, trigger, stagger } from '@angular/animations';

const Optional = {
  optional: true
};

export const RouteAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })
    ], Optional),
    query('section', [
      style({
        opacity: 0
      })
    ], Optional),
    query(':enter', [
      animate(
        '500ms ease',
        style({opacity: 1, transform: 'scale(1) translateY(0)'})
      )
    ], Optional),
    query('section', [
      stagger('300ms', [
        animate('200ms', style({
          opacity: 1
        }))
      ])
    ], Optional),
  ])
]);

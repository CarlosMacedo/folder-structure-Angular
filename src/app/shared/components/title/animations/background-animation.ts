import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const backgroundAnimate: any = trigger('titleState', [
  state(
    'hello world! :)',
    style({
      backgroundColor: 'var(--red)',
    })
  ),
  state(
    'HELLO WORLD! :)',
    style({
      backgroundColor: 'var(--gray-3)',
    })
  ),
  transition('* <=> *', animate(500)),
]);

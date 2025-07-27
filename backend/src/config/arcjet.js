import arcjet, { tokenBucket, shield, detectBot } from '@arcjet/node';
import { ENV } from './env.js';

// initialize Arcjet with security rules
export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ['ip.src'],
  rules: [
    shield({ mode: 'LIVE' }),
    detectBot({
      mode: 'LIVE',
      allow: ['CATEGORY:SEARCH_ENGINE'],
    }),

    tokenBucket({
      mode: 'LIVE',
      interval: 10,
      capacity: 15,
      refillRate: 1,
    }),
  ],
});

import retextEnglish from 'retext-english';
import retextPassive from 'retext-passive';
import retextStringify from 'retext-stringify';
import longSentences from './long-sentences.js';
import { unified } from 'unified';

export const processor = unified()
  .use(retextEnglish)
  .use(retextPassive)
  .use(longSentences)
  .use(retextStringify);

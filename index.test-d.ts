import {expectType} from 'tsd';
import {catNames, randomCatName} from './index.js';

expectType<readonly string[]>(catNames);
expectType<string>(randomCatName());

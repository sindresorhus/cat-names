import {expectType} from 'tsd';
import catNames = require('.');

expectType<readonly string[]>(catNames.all);
expectType<string>(catNames.random());

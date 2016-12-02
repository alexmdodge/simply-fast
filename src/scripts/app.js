require('../styles/styles.css');
import {SimpleDOM} from './support/simpleDOM';

var dom = new SimpleDOM(true);

dom.append('splash-description', 'The best website ever!');
dom.append('splash-description', 'But there are errors.');
dom.append('splash-description', 'But there are errors.');


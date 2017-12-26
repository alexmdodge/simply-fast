/**
 * Root application script
 * 
 * This file is the entry point to the Webpack build. This is
 * where you should write and extend all of JavaScript you're
 * building the site with.
 * 
 * Any scripts which are developed by other people should be
 * included in the vendor.js file.
 */

import DOMHelper from 'utils/DOMHelper.js'

const app = DOMHelper.get('#app');
const title = DOMHelper.get('.title');
const unknown = DOMHelper.get('another');
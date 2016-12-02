/**
 * Simple Dom is just some simple javascript functions that
 * help you to manipulate the DOM. Consider it an as you need it
 * file that you can edit.
 * 
 * A great place for help is here,
 * http://youmightnotneedjquery.com/
 * 
 * @export
 * @class SimpleDOM
 */
export class SimpleDOM {

  /**
   * Creates an instance of SimpleDOM.
   * 
   * @param [debug=true] Will debug in the console for you
   * @memberOf SimpleDOM
   */
  constructor(debug = true) {
    this.debug = debug;
  }

  /**
   * append - add text to another bit of html
   * 
   * @param parentId dom element to append to
   * @param element content to append
   * @memberOf SimpleDOM
   */
  append(parentId, element) {
    if(this.debug) {
      console.log('The content ' + element + 'was appended to ' + parentId);
    }

    let text = document.createTextNode(element);
    document.getElementById(parentId).appendChild(text);   

  }
}
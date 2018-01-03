/**
 * A utility class which provides simple convenience methods
 * for manipulating the DOM using vanilla JavaScript.
 */
export default class DOMHelper {

  /**
   * Returns a DOM node represented by the name string. This
   * can either be passed explicitly as .class or #id, or just
   * as a string, and function will infer which identifier returns
   * an element.
   * 
   * @param name - string representing class or id of element 
   */
  static get(name) {
    const isClass = name.indexOf('.') > -1;
    const isId = name.indexOf('#') > -1;

    if (isClass || isId) {
      return document.querySelector(name);
    } else {
      const attemptedClass = document.querySelector(`.${name}`);
      const attemptedId = document.querySelector(`#${name}`);
      return attemptedClass || attemptedId;
    }
  }

  /**
   * This is a sample method as a stepping off point for testing using
   * Jest. Accepts a name and returns all letters capitalized.
   */
  static funOperation(lowerCaseName) {
    return lowerCaseName.toUpperCase();
  }
}
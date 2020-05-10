//const { by, element } = require("protractor");
import { browser, by, element, ElementFinder, ElementArrayFinder } from "protractor";
export class Elements {
    /**
     * @params 
     * xpath: xpath as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementFinder
     */
    public getElementByXpath(xpath: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.element(by.xpath(xpath)) : element(by.xpath(xpath));
    }
    /**
     * @params 
     * xpath: xpath as input string
     * rootElement: ElementFinder
     * @return
     * return elements as ElementArrayFinder   
     */
    public getAllElementsByXpath(xpath: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.all(by.xpath(xpath)) : element.all(by.xpath(xpath));
    }
    /**
     * @params 
     * css: css as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementFinder
     */
    public getElementByCss(css: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.element(by.css(css)) : element(by.css(css));
    }
    /**
     * @params 
     * css: css as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementArrayFinder
     */
    public getAllElementsByCss(css: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.all(by.css(css)) : element.all(by.css(css));
    }
    /**
    * @params 
    * Name: attribute name as input string
    * rootElement: ElementFinder
    * @return
    * return element as ElementFinder
    */
    public getElementByName(name: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.element(by.name(name)) : element(by.name(name));
    }
    /**
     * @params 
     * Name: attribute name as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementArrayFinder
     */
    public getAllElementsByName(name: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.all(by.name(name)) : element.all(by.name(name));
    }
    /**
     * @params 
     * tagName: tag name as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementFinder
     */
    public getElementByTagName(tagName: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.element(by.tagName(tagName)) : element(by.tagName(tagName));
    }
    /**
     * @params 
     * tagName: tag name as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementArrayFinder
     */
    public getAllElementsByTagName(tagName: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.all(by.tagName(tagName)) : element.all(by.tagName(tagName));
    }
    //class Name
    /**
    * @params 
    * className: class name as input string
    * rootElement: ElementFinder
    * @return
    * return element as ElementFinder
    */
    public getElementByClassName(className: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.element(by.className(className)) : element(by.className(className));
    }
    /**
     * @params 
     * className: class name as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementArrayFinder
     */
    public getAllElementsByClassName(className: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.all(by.className(className)) : element.all(by.className(className));
    }
    //element id
    /**
    * @params 
    * id: element id as input string
    * rootElement: ElementFinder
    * @return
    * return element as ElementFinder
    */
    public getElementById(id: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.element(by.id(id)) : element(by.id(id));
    }
    /**
     * @params 
     * id: element id as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementArrayFinder
     */
    public getAllElementsById(id: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.all(by.id(id)) : element.all(by.id(id));
    }
    //link text
    /**
    * @params 
    * linkText: link text as input string
    * rootElement: ElementFinder
    * @return
    * return element as ElementFinder
    */
    public getElementByLinkText(linkText: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.element(by.linkText(linkText)) : element(by.linkText(linkText));
    }
    /**
     * @params 
     * linkText: link text as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementArrayFinder
     */
    public getAllElementsByLinkText(linkText: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.all(by.linkText(linkText)) : element.all(by.linkText(linkText));
    }
    //partial link text
    /**
    * @params 
    * PartialLinkText: partial link text as input string
    * rootElement: ElementFinder
    * @return
    * return element as ElementFinder
    */
    public getElementByPartialLinkText(partialLinkText: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.element(by.partialLinkText(partialLinkText)) : element(by.partialLinkText(partialLinkText));
    }
    /**
    * @params 
    * PartialLinkText: partial link text as input string
    * rootElement: ElementFinder
    * @return
    * return element as ElementArrayFinder
    */
    public getAllElementsByPartialLinkText(partialLinkText: string, rootElement?: ElementFinder) {
        return rootElement ? rootElement.all(by.partialLinkText(partialLinkText)) : element.all(by.partialLinkText(partialLinkText));
    }
}


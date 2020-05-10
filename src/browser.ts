import { browser, ElementFinder, ElementArrayFinder } from 'protractor';
import { Logger } from './logger';
import { protractor } from 'protractor/built/ptor';

export class BrowserActions {

    private globalWait: number;
    private waitMessageClickable: string = 'ms waited. please check whether locator is correct and element is visible and clickable at the moment';
    private waitMessageVisible: string = 'ms waited. please check whether locator is correct and element is visible at the moment';

    constructor(milliseconds: number) {
        this.globalWait = milliseconds;
    }

    /**
    * waitForElementToBeVisible - waits for the element to be visible till the configured ms in constructor
    * @param 
    * elementToWait: ElementFinder 
    * @return
    * promise.Promise<void>
    */
    public waitForElementToBeVisible(elementToWait: ElementFinder):Promise<void> {
        return browser.wait(
            protractor.ExpectedConditions.visibilityOf(elementToWait),
            this.globalWait,
            `${this.globalWait} ${this.waitMessageVisible}`
        );
    }

    /**
    * waitForElementToBeClickable - waits for the element to be clickable till the configured ms in constructor
    * @param 
    * elementToWait: ElementFinder 
    * @return
    * promise.Promise<void>
    */
    public waitForElementToBeClickable(elementToWait: ElementFinder):Promise<void> {
        return browser.wait(
            protractor.ExpectedConditions.elementToBeClickable(elementToWait),
            this.globalWait,
            `${this.globalWait} ${this.waitMessageClickable}`
        );
    }

    /**
    * navigateTo - navigates to the given url 
    * @param 
    * url: string 
    * @return
    * promise.Promise<void>
    */
    public navigateTo(url: string):Promise<void> {
        return browser.get(url);
    }

    /**
     * scrollToElement - scrolls to given element
     * @param
     * element: ElementFinder
     * @return
     * promise.Promise<void>
     */
    public scrollToElement(element: ElementFinder):Promise<void> {
        return this.waitForElementToBeVisible(element).then(() => {
            browser.executeScript('arguments[0].scrollIntoView();', element);
        });
    }

    /**
     * selectDropdownByValue - takes care of clicking on the select element and selects required options from the list based on given option value
     * @params
     * select: select element for dropdown
     * option: options from select to iterate dropdown values to find value
     * value:  text of dropdown value for selection
     * @return
     * promise.Promise<void>
     *
     */
    public selectDropdownByValue(select: ElementFinder, options: ElementArrayFinder, value: String):Promise<void> {
        return this.waitForElementToBeClickable(select).then(() => {
            select.click().then(() => {
                this.waitForElementToBeClickable(options.get(1)).then(() => {
                    options.each((ele) => {
                        ele?.getText().then((textValue) => {
                            if (textValue == value) {
                                ele.click();
                            }
                        });
                    });
                });
            });
        });
    }

    /**
     * selectDropdownByAttributeValue - takes care of clicking on the select element and selects required options from the list based on given attribute value == given value
     * @params
     * select: select element for dropdown,
     * option: options from select to iterate dropdown values to find value,
     * attribute: attribute name of option tag,
     * value:  text of dropdown value for selection
     * @return
     * promise.Promise<void>
     */
    public selectDropdownByAttributeValue(
        select: ElementFinder,
        options: ElementArrayFinder,
        attribute: string,
        value: String
    ):Promise<void> {
        return this.waitForElementToBeClickable(select).then(() => {
            select.click().then(() => {
                this.waitForElementToBeClickable(options.get(1)).then(() => {
                    let anyAttribute: number = 0; // for logging purpose, if any matched attribute found, warning message will be thrown
                    options
                        .each((ele) => {
                            ele?.getAttribute(attribute).then((textValue) => {
                                if (textValue == value) {
                                    ele.click();
                                    anyAttribute++;
                                }
                            });
                        })
                        .then(() => {
                            if (anyAttribute == 0) {
                                Logger.warning(
                                    `There is no option called ${value} or no attribute called ${attribute}`
                                );
                            }
                        });
                });
            });
        });
    }

}

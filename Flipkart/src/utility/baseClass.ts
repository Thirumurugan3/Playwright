import { Page, Locator } from "@playwright/test";
import { FillOptions, defaultFillOption } from "./baseOptions";

export class BaseClass {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Method to fill value for specific input field/textarea
   * @param {Locator} locator - Locator of textarea to be filled
   * @param {string} value - Value to be filled
   * @param {FillOptions} option - Defaut option for filling the text
   */
  async fill(
    locator: Locator,
    value: string,
    option: FillOptions = defaultFillOption,
  ) {
    console.log(`Value ${value} filled for ${locator}`);
    try {
      await locator.fill(value, option);
    } catch (e) {
      throw new Error(`Error occured while filling ${locator}`);
    }
  }

  async click(locator: Locator, dispatchEvent = false) {
    try {
      if (!dispatchEvent) {
        await locator.waitFor({ state: "visible" });
        await locator.click();
      } else {
        await locator.dispatchEvent("click");
      }
    } catch (e) {
      throw new Error(`Error occured while clicking selector ${locator}`);
    }
  }

  async checkElementIsVisible(locator: Locator):Promise<boolean> {
      return await locator.isVisible();
}

async setInputFile(locator:Locator,files:string|string[]){
await locator.setInputFiles(files)
}

async uploadFileUsingFileChooser(locator:Locator,files:string){
const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        locator.dispatchEvent('click'),
      ]);
      await fileChooser.setFiles(files);
}
}

import {Page} from "@playwright/test";
import { LogInPage } from "../POM/loginPage";

export class LogInPageSteps{
    readonly page:Page;
    readonly logInPage:LogInPage;

    constructor(page:Page){
        this.page=page;
        this.logInPage=new LogInPage(this.page);
    }

    async logInToApplication(logInDetail:JSON){
await this.logInPage.fillUsername(logInDetail["UserName"])
    }
}
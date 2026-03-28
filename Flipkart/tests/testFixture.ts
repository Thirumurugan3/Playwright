import {test as base} from "@playwright/test";
import { LogInPageSteps } from "../src/steps/logInPageSteps";

type TestFixture ={
    logInSteps:LogInPageSteps;
}

export const test=base.extend<TestFixture>({
    logInSteps:async({page},use)=>{
        const logInSteps=new LogInPageSteps(page);
        console.log("Steps invoked successfully")
        await use(logInSteps);

    }
})
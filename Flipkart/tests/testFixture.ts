import {test as base, TestFixture} from "@playwright/test";
import { LogInPageSteps } from "../src/steps/logInPageSteps";

type TestFixture ={
    logInSteps:LogInPageSteps;
}

base.extend<TestFixture>({

})
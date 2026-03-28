import { expect } from "@playwright/test";
import { test } from "./testFixture";

test.describe("Home Page", async () => {
  test.beforeAll(async ({ page }) => {
    await page.goto("www.flipkart.com");
  });
  test("@JIRA-1323 Verify Profile Name in Home Page", async ({
    page,
    logInSteps,
  }) => {
    await test.step("When user LogIn to application", async () => {
      const logInDetail = {
        UserName: "XYZ",
        Token:"iasd",
        Password: "AQAAQ",
      };
      console.log("sjbsjkadnf");
      await logInSteps.logInToApplication(
        JSON.parse(JSON.stringify(logInDetail)),
      );
    console.log("User0 is able to login successfully");  
    console.log("User1 is able to login successfully");  
    console.log("User2 is able to login successfully");
    console.log("User3 is able to login successfully");  
    console.log("User4 is able to login successfully");  
    console.log("User5 is able to login successfully");
    });

    await test.step("Then user should be able to see the profile name", async () => {
      expect(page.locator("profilename")).toBeVisible();
    });
  });
});

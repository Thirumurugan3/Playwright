import { defineConfig,devices } from "@playwright/test";

export default defineConfig({
testDir:"./Flipkart/tests",
fullyParallel:false,
forbidOnly:!!process.env.CI,
timeout:60*10*1000,
expect:{
    timeout:60000
},
reporter:[['html',{open:"never"}]],
use:{
    headless:false,
    actionTimeout:10000,
    screenshot:"only-on-failure",
    testIdAttribute:"data-testid",
    trace:"on",
},
projects:[
   {
    name:"chromium",
    use:{...devices["Desktop chrome"]}
   }
]
})
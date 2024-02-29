/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
//******************/

import { test, expect, chromium } from '@playwright/test'
test('test Assignment 1 Create Lead', async () => {
  test.setTimeout(50000);

  const browser = await chromium.launch({ headless: false });
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();

  await page.goto("https://login.salesforce.com");
  await page.locator("input[id='username']").fill("herrafiisdet@gmail.com");
  await page.locator("[id=password]").fill("Foumal3ancer@");
  page.locator("[id=Login]").click();

  await page.locator("div[class=slds-icon-waffle]").click();
  await page.locator("button[part=button]").click();
  await page.locator("//p[text()='Sales']").click();
  await page.locator("(//span[text()='Leads'])[1]").click();
  await page.locator("//button[text()='New']").click();

  await page.locator("button[name='salutation']").click();
  await page.getByText("Mr.").click();
  await page.locator("input[name='lastName']").fill("Erra");
  await page.locator("input[name='Company']").fill("CompanyXXX");

  await page.locator("button[name='SaveEdit']").click();
  await page.waitForTimeout(5000)
  //Verification   
  const verifylead = await page.locator("span[class='toastMessage slds-text-heading--small forceActionsText']").isVisible()
  if (verifylead == true) {
    console.log("******** The leads created successfully ******** ")
  } else {
    console.log("Failed to create a lead")
  }

})

//******************************************************** */
/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username   demosalesManager
3. Enter the password    crmsfa
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/


































/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name

Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/

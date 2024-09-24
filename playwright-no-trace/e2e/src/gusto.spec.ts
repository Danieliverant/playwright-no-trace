import test from "@playwright/test";

test('gusto', async ({ page }) => {
  await page.goto('https://flows.gusto-demo.com/flows/lH2XBBRXF67s0rKXL-XQXN5rWXVXmLLBiv7KyOrq5jM');

  await page.locator('#location_street_1').fill('777 Brockton Avenue');
  await page.locator('#location_city').fill('Abington');
  await page.locator('#location_state').selectOption('MA');
  await page.locator('#location_zip').fill('02351', { force: true });
  await page.locator('#location_phone_number').fill('0000000000');

  await page.locator('#location_phone_number').focus();
  await page.keyboard.press('Enter');

  await page
    .locator('.alert.alert-dismissible.fade.show.alert-success')
    .waitFor();
});

test('iframe', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/gusto.html');

  const iframe = page.locator('iframe').contentFrame();

  await iframe.locator('#location_street_1').fill('777 Brockton Avenue');
  await iframe.locator('#location_city').fill('Abington');
  await iframe.locator('#location_state').selectOption('MA');
  await iframe.locator('#location_zip').fill('02351', { force: true });
  await iframe.locator('#location_phone_number').fill('0000000000');

  await iframe.locator('#location_phone_number').focus();
  await page.keyboard.press('Enter');

  const iframe2 = page.locator('iframe').contentFrame();

  await iframe2
    .locator('.alert.alert-dismissible.fade.show.alert-success')
    .waitFor();
});

import test from "@playwright/test";

test('iframe', async ({ page }) => {
  await page.goto('https://flows.gusto-demo.com/flows/J4tzFABBWR0udORrrMg0pOZDkeMC6FZsEZ7IzfsghwI');

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
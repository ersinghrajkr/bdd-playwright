import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ICustomWorld } from './custom-world'

Given('User visits homepage', async function (this: ICustomWorld) {
    const page = this.page!
    await page.goto('https://www.saucedemo.com')
})

When('User enter username', async function (this: ICustomWorld) {
    const page = this.page!
    const plusButton = await page.locator('[name="user-name"]')
    await expect(plusButton).toBeVisible()
    await plusButton.t
})

When('User enter Password', async function (this: ICustomWorld) {
    const page = this.page!
    const counterText = await page.locator('[name="password"]')
  })

Then('User enter Password', async function (this: ICustomWorld) {
    const page = this.page!
    const counterText = await page.locator('[name="login-button"]')
})
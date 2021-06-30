const puppeteer = require("puppeteer")

const signIn = async (
  page,
  {
    emailSelector,
    passwordSelector,
    submitSelector,
    credentials: { email, password },
  }
) => {
  await page.type(emailSelector, email, { delay: 100 })
  await page.type(passwordSelector, password)
  await page.click(submitSelector)
  await page.waitForNavigation()
}

const run = async ({
  productUrl,
  acceptPrivacySelector,
  priceSelector,
  priceTransformer,
  desiredMaxPrice,
  addToBasketSelector,
  openBasketSelector,
  basketUrl,
  checkoutSteps,
}) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  })
  const page = await browser.newPage()

  // goto and wait for product page to load
  await page.goto(productUrl)
  await page.waitForSelector(acceptPrivacySelector)

  // accept privacy policy
  await page.click(acceptPrivacySelector)

  // get price
  const priceEl = await page.$(priceSelector)
  const price = priceTransformer(await priceEl.evaluate((el) => el.textContent))

  await page.screenshot({ path: "./tmp/product-page.png" })

  if (desiredMaxPrice < price) {
    return { error: "too expensive" }
  }

  // add to basket
  await page.click(addToBasketSelector)
  await page.waitForSelector(openBasketSelector, { timeout: 7000 })

  // goto and wait for basket page to load
  await page.goto(basketUrl, { timeout: 5000 })
  await page.screenshot({ path: "./tmp/basket-page.png" })

  for (let i = 0; i < checkoutSteps.length; i++) {
    await checkoutSteps[i](page)
  }

  await page.screenshot({ path: "./tmp/payment-page.png" })
  await page.waitForTimeout(2000)
  await browser.close()
}

run({
  productUrl:
    "https://www.cdiscount.com/auto/gps-car-audio-electronique/camera-de-voiture-toguard-4k-camera-avant-et-arri/f-133164801-auc0780347337341.html?idOffre=895156474#mpos=0|mp&sw=ac2beeb106e2f2a99c892e2ec734f8e96f5b12e8475ecedd65612e7875150ed464f025f23e590ffcbc55751bca7f2d03dd9ad51c884d94259dcd82abe4e1725bac3af5ec2fa2446e4c8622947891c85e2e95038c3896666664250fc0246851806a20f9ca1a6a7d0f3f120aa646a4eb66df1005d947d5ebea86a845c977cc35ad",
  acceptPrivacySelector: "#footer_tc_privacy_button_2",
  priceSelector: ".jsFpPurchasePriceBloc .fpPrice.price:not(.displayToPro)",
  priceTransformer: (price) => Number(price.replace("€", ".")),
  desiredMaxPrice: 100,
  addToBasketSelector:
    '#fpBlocPrice input[value="Ajouter au panier"][type="submit"]',
  openBasketSelector:
    "#raContent > div.raFixedRightCol.jsRaFixedRightCol > div.raColTop > a.btGreen.btF",
  basketUrl: "https://www.cdiscount.com/Basket.html",
  checkoutSteps: [
    // checkout
    async (page) => {
      await page.waitForSelector("#bBlocPrix > div > a")
      await page.click("#bBlocPrix > div > a")
      await page.waitForNavigation()
    },
    // sign in
    async (page) => {
      await signIn(page, {
        emailSelector: "#CustomerLogin_CustomerLoginFormData_Email",
        passwordSelector: "#CustomerLogin_CustomerLoginFormData_Password",
        submitSelector:
          "#LoginForm > div > div > div.clCnxContent.clCnxMainContent > div:nth-child(7) > div > input",
        credentials: {
          email: "nicolascalixte.pro@gmail.com",
          password: "Tititoto123",
        },
      })
    },
  ],
})

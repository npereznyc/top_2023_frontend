export const questions = [
  {
    questionType: 'regular',
    statusBarValue: '20',
    image: '/compass.png',
    headerText: 'Complete the following sentence... ',
    questionText: 'My credit score is: ',
    subText: '(Take your best guess!)',
    options:['Just getting started (0-619)', "On it's way up (620-719)", "Pro status (720-850)"],
    helperText: [
      "What's a credit score?",
    ],
    helperPopUp: [
      "<div> <p> A credit score is like a numerical grade that tells lenders how risky it might be to lend you money. It's based on your financial history, like how reliably you've paid bills and managed debt. </p> <br /> <p> A higher score means you're seen as less risky, making it easier to get loans or credit cards with better terms. In simple terms, it's a number that summarizes how good you are at managing money and affects your ability to borrow. </p> <br /> <p> Keep in mind that you might not always have access to credit score monitoring. You do have the right to request a free credit report every year each from Equifax, Experian, and TransUnion, which are the major consumer reporting companies. Additionally, your credit card issuer may offer free credit reports. </p> </div>"
  ]
  },
  {
    questionType: 'twoImages',
    statusBarValue: '35',
    image: '/roadSigns.png',
    questionText: "Choose a card that's right for you. Which direction do you want to go in?",
    options:['/cardOne.png', '/cardTwo.png'],
    helperText: [
      "Select a card to see more details.",
    ],
    helperPopUp: [
    "A credit score is like a numerical grade that tells lenders how risky it might be to lend you money. It's based on your financial history, like how reliably you've paid bills and managed debt. A higher score means you're seen as less risky, making it easier to get loans or credit cards with better terms",
    "In simple terms, it's a number that summarizes how good you are at managing money and affects your ability to borrow.",
    "Keep in mind that you might not always have access to credit score monitoring. You do have the right to request a free credit report every year each from Equifax, Experian and TransUnion, which are the major consumer reporting companies. Additionally, your credit card issuer may offer free credit reports."
  ]
  },
  {
    questionType: 'regular',
    statusBarValue: '50',
    image: '/trees.png',
    headerText: "Let's use that new card! Just remember, money doesn't grow on trees, so only spend what you can afford. What's essential this month?",
    options: ['$ Takeout & TV', '$$ Night out with friends', '$$$ Weekend cabin getaway'],
  },
  {
    questionType: 'singleOption',
    statusBarValue: '65',
    image: '/crutches.png',
    headerText: "Let's use that new card! Just remember, money doesn't grow on trees, so only spend what you can afford. What's essential this month?",
    options: ['Pay with card'],
  },

]
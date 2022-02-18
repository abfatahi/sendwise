# Sendwise

A simple online money transfer web application. This project was bootstrapped with `React`, `Redux`, `NodeJS`, `ExpressJS`, `MongoDB` and `Styled-components.`
## Staging Link

The application is hosted at [https://sendwise.vercel.app]

## Getting Started
**1:** The first screen is the `Onboarding screen / Register` where user is prompted to create an account and then redirected to the `Login screen` where they can login into their account using the details they just created. Redux and window.localStorage is leveraged on to save the registered users details.

**2:** The `User dashboard` is the next screen shown after a successful login. It contains a summary view indicating details such as: User details, account balance details and a table containing the last 5 transactions (transfers).

Note: More details about a transfer can be viewed under the `"Account/Transactions"` tab available from the Sidebar.

**3:** Next is the `"Account" screen` where user can view all their transactions and account statement. On the `Transactions tab` user can view more information about individual transaction by clicking the `View` button on the `Action` column of the table showing the list of transfers.

**4:** Next is the `"Transfer" screen` where user can initiate a new funds transfer.

**5:** The `"Logout" tab` on the sidebar and the `"ArrowLeft" icon` available on the navbar is used to logout out of the application.



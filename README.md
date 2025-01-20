# playwright-google-search

#### Clone this repository
```bash 
git clone git@https://github.com/Sylvestre01/playwright-google-search
```

#### navigate to the project directory
```bash
cd playwright-google-search
```

#### Install dependencies
```bash
npm install
```

#### Run test
<!-- Describe that the command below will run the test, generate report and open it on the browsers -->
To run the tests, run the following command. This command will run the tests, generate a report and open it on the browser.

```bash
npx playwright test
```

### Generate report
<!-- Describe the use of playwright reporting. -->
I used the default playwright reporting to generate a report after running the tests. To generate the report, run the following command after running the tests.

```bash
npx playwright show-report
```

The report will be saved in the `/playwright-report` directory.




## Running tests in Github CI/CD
The CI/CD pipeline is configured in the `.github/workflows/playwright.yml` file to run the automated test on GitHub using the playwright Docker container runner.

To run the tests in GitHub CI/CD, push the code to the repository and the pipeline will be triggered automatically.




## Authors
| 👤 Name        | Github                                         | LinkedIn                                                   |
|----------------|------------------------------------------------|------------------------------------------------------------|
| Sylvester Udoh | [@Sylvestre01](https://github.com/Sylvestre01) |[@SylvesterUdoh](https://www.linkedin.com/in/sylvester-udoh/) |

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Sylvestre01/playwright-google-search/issues).

## Show your support
Give a ⭐️ if you like this project!

## Acknowledgments
- [Playwright](https://playwright.dev/)
- [GitHub CI/CD](https://docs.github.com/ee/ci/)
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [JavaScript](https://www.javascriptlang.org/)
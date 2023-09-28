[![This project uses GitHub Actions for continuous integration.](https://github.com/ember-learn/ember-data-request-service-cheat-sheet/workflows/CI/CD/badge.svg)](https://github.com/ember-learn/ember-data-request-service-cheat-sheet/actions?query=workflow%3ACI%2FCD)
[![This project uses Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Ember/ember-data-request-service-cheat-sheet)

# EmberData Request Service Cheat Sheet

This is a work-in-progress cheat sheet to aid in writing documentation
for and teaching EmberData's Request Service.
To learn more about the Request Service, check out
[RFC 860](https://rfcs.emberjs.com/id/0860-ember-data-request-service/).

Visit [the deployed app](https://ember-learn.github.io/ember-data-request-service-cheat-sheet/) for side-by-side examples of EmberData's Request Service
and older EmberData patterns.


## How to Contribute

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for more information.


## Continuous integration

We use [GitHub Actions](.github/workflows/ci-cd.yml) to lint and test the app when a PR (pull request) is created and merged.

Run the following commands to lint and test from local machine:

```bash
npm run lint
npm test
```

To fix linting errors, try the following command:

```bash
npm run lint:fix
```


## Continuous deployment

We use [GitHub Actions](.github/workflows/ci-cd.yml) to deploy the app to `gh-pages` branch when a PR is merged.

If you are a repo maintainer, you can run the following command to deploy from local machine:

```bash
npm run deploy
```


## Credits

This app was inspired by [You might not need jQuery](http://youmightnotneedjquery.com/).

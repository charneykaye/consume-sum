
|           | **Production**                                                                                                                                                                  | **Development**                                                                                                                                                               |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CI Status | [![test package](https://github.com/charneykaye/consume-sum/actions/workflows/ci_prod.yml/badge.svg)](https://github.com/charneykaye/consume-sum/actions/workflows/ci_prod.yml) | [![test package](https://github.com/charneykaye/consume-sum/actions/workflows/ci_dev.yml/badge.svg)](https://github.com/charneykaye/consume-sum/actions/workflows/ci_dev.yml) |

# TypeScript NPM Package Consumer

This is a test of a bootstrap project to consume this example TypeScript utility package published to the NPM package repository: [@charneykaye/compute-sum](https://github.com/charneykaye/compute-sum).

The structure of this project makes some assumptions based on the proprietary environment from which the experiment was derived:

  * TypeScript
  * Node.js
  * Git hosted on GitHub.
  * GitHub Actions CI.
  * NPM monorepo with multiple packages.
  * Jest for unit testing.

## Setup

You'll only run `npm install` from the root of the repository, to install all dependencies (via npm-run-all).

But first, you'll need to provide a `NPM_AUTH_TOKEN` environment variable. For example, keep it in a **.env** file (this is gitignored) and then do this when you start your session:

```shell
set -a # automatically export all variables
source .env
set +a
```


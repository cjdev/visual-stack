# Contributing to Visual Stack

Thank you for considering a contribution to Visual Stack. All forms of contribution are welcome, from issue reports to PRs and documentation / write-ups.

## Code of Conduct

This project and everyone participating in it is governed by the Visual Stack Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to a maintainer.

## Getting Started

### Packages

This repo consists of three packages managed by [lerna](https://lernajs.io/):

#### visual-stack (VS)

These are the visual components. Generally, they should be stateless and, where appropriate, provide an API that works
well with controlling, stateful components.

#### visual-stack-redux (VSR)

For components from visual-stack that require state management, this library provides redux-based wrappers. This package depends on `visual-stack`.

#### visual-stack-docs (VSD)

This is a microsite providing documentation and live examples of components. This package depends on the other two.

### Running locally

From a fresh clone of the repo, start by bootstrapping the project from the root with `npm run bootstrap`. This will install all external dependencies, create links between local dependent packages and build all three packages.

To run a dev instance of VSD:
```
cd packages/visual-stack-docs
npm run docs
```

This works well in conjunction with `npm run watch` in both the VS and VSR packages to setup hot reloading while developing, integrating, and documenting components.

To run these with a single command, from the root directory run `npm run start-all`

## Opening a PR

* Ensure that your effort is aligned with the project's roadmap by talking to the maintainers, especially if you are going to spend a lot of time on it.

* If you're planning to add or change a major feature in a PR, please ensure the change is aligned with the project roadmap by opening an issue first, especially if you're going to spend a lot of time on it.

* Be careful to follow the code style of the project. Run npm run lint after your changes and ensure you do not introduce any new errors or warnings.

* Make sure you do not add regressions by running npm test.

* Always include tests with your changes, either that demonstrates the bug, or tests the new functionality. If you're not sure how to test your changes, feel free to reach out to the maintainers.

* Make sure you run `npm run lint` to ensure the new code passes our linting rules.

* All new components and significant changes to existing components require inclusion in VSD.


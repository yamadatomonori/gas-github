# gas-github
[Standalone](https://developers.google.com/apps-script/guides/standalone) [Web App](https://developers.google.com/apps-script/guides/web) on Google Apps Script for listening [GitHub organization events](https://developer.github.com/webhooks/#events) and mutating a repository with [GraphQL API](https://docs.github.com/en/free-pro-team@latest/graphql).

## Objectives
1. Listening GitHub organization events to detect [a creation of repository](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/webhook-events-and-payloads#repository).
1. [Protecting](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuring-protected-branches) [a main branch](https://github.com/github/renaming#new-repositories-use-main-as-default-branch-name) upon the creation.
1. Creating an issue to notify the protection.

## Prerequisites
* a GitHub account
* an organization (you can create one for free)
* a repository (in order to get a branch, you need a commit! Make sure to initialize with a README)
* a Personal access tokens

* a Google Account
* (Optional) a Google Cloud Platform project for better logging.

## Setting up
### Google Apps Script
#### Create a script file

#### Store GitHub information
#### Deploy as a Web application
#### (Optional) Link a Google Cloud Platform project


### GitHub
#### Setting Webhooks

## Demo
https://github.com/My-organisation-0103

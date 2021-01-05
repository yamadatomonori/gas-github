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
1. Follow [the steps](https://developers.google.com/apps-script/guides/standalone#creating_a_standalone_script) to create a new Google Apps Script project.
2. Enter the source of [Code.gs](https://github.com/yamadatomonori/gas-github/blob/main/Code.gs) in the editor.

#### Store GitHub information  
1. _File_ > _Project properties_ > _Script properties_. See [the video](https://youtu.be/-uREM_nJf60?list=PLbsvRhEyGkKdUKw5d8wURpo_AX-gViZ_G&t=218) to follow the steps.
1. Add the following properties:
   * _Property_: **GitHub Personal Access Token**, _Value_: {{ Your Personal Access Token }}
   * _Property_: **GitHub User ID**, _Value_: {{ Your User ID }}
  
#### Deploy as a Web application
1. Follow [the steps](https://developers.google.com/apps-script/guides/web#deploy_a_script_as_a_web_app).
   *  At step 4, select **Me**.
   *  At step 5, select **Anyone, even anonymous**.
1. Take note the _Current web app URL_.

#### (Optional) Link a Google Cloud Platform project
(Todo: @yamadatomonori)

### GitHub
#### Setting Webhooks
1. Follow [the steps](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/creating-webhooks#setting-up-a-webhook).
   1. For _Payload URL_, enter the aforementioned web app URL.
   1. For _Which events would you like to trigger this webhook?_, select **Let me select individual events.**, then tick **Repositories**

## Demo
https://github.com/My-organisation-0103

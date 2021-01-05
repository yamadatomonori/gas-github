async function doPost(ev) {
  const payload = JSON.parse(decodeURIComponent(ev.postData.contents).replace(/payload=/, ''));
  
  if (payload.action != 'created') {
    console.log(`Abort. payload.action: ${payload.action}`);
    return;
  }
  
  const node_id = payload.repository.node_id;
  
  await callApi('\
{\n\
  "query":"mutation MyMutation {\
    createBranchProtectionRule(input: {\
      repositoryId: \\"' + node_id + '\\", pattern: \\"main\\", requiresLinearHistory: true\
    }) {  clientMutationId  }}"\
\n}\
');  
    
  await callApi('\
{\n\
  "query":"mutation MyMutation {\
    createIssue(input: {\
      repositoryId: \\"' + node_id + '\\",\
      title: \\"New repository created.\\",\
      body: \\"@' + PropertiesService.getScriptProperties().getProperty('GitHub User ID') + ' @' + payload.sender.login + ' created the repository. Main branch is [protected](../settings/branches).\\"\
    }) {  clientMutationId  }}"\
\n}\
');

  return HtmlService.createHtmlOutput('doPost finished.');
}

const callApi = payload => {
  const headers = {
    "Authorization": `bearer ${PropertiesService.getScriptProperties().getProperty('GitHub Personal Access Token')}`
  };
  
  const options = {
    headers,
    method : 'post',
    payload,
  };
  
  const response = UrlFetchApp.fetch('https://api.github.com/graphql', options);
  
  if (response.getResponseCode() != 200) throw new Error(response);

  console.log(response.getContentText());  
  return response;
};

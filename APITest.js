const accessToken = 'your_access_token_here';
const customObjectEndpoint = 'https://your_salesforce_instance_url_here/services/data/vXX.X/sobjects/Your_Custom_Object__c/';

const saveSurveyData = (jsonData) => {
  fetch(customObjectEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => {
    if (response.ok) {
      console.log('Survey data saved successfully!');
    } else {
      console.error('Failed to save survey data:', response);
    }
  })
  .catch(error => {
    console.error('Error saving survey data:', error);
  });
}

// secure JSON POST to salesforce custom object

// Load the JSON data from a separate file
$.getJSON("your-json-file.js", function(data) {

  // Set up the AJAX request to send data to Salesforce
  $.ajax({
      url: "https://yourinstance.salesforce.com/services/data/v50.0/sobjects/YourCustomObject__c/",
      type: "POST",
      headers: {
          "Authorization": "Bearer YourAccessToken",
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      data: JSON.stringify(data),
      success: function(response) {
          console.log("Data sent successfully: " + JSON.stringify(response));
      },
      error: function(xhr, status, error) {
          console.error("Error sending data: " + error);
      }
  });

});

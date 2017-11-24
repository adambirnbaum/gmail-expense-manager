function getReceivedDate(message) {
  return message.getDate().toLocaleDateString();
}

function getLargestAmount(message) {
  return "TODO";
}

function getExpenseDescription(message) {
  var sender = message.getFrom();
  var subject = message.getSubject();
  return sender + " | " + subject;
}

function getSheetUrl() {
  if (PropertiesService.getUserProperties().getProperty('SPREADSHEET_URL') == null) {
    var spreadsheetUrl = "Enter Url";
  } else {
    var spreadsheetUrl = PropertiesService.getUserProperties().getProperty('SPREADSHEET_URL');
  }
  return spreadsheetUrl;
}

function objToArray(obj, keys) {
  return keys.map(function(key) {
    return obj[key];
  });
}
function getReceivedDate(message) {
  return message.getDate().toLocaleDateString();
}

function getLargestAmount(message) {
  var amount = 0;
  var messageBody = message.getPlainBody();
  var regex = /\$[\d,]+\.\d\d/g;
  var match = regex.exec(messageBody);
  while (match) {
    amount = Math.max(amount, parseFloat(match[0].substring(1).replace(/,/g,'')));
    match = regex.exec(messageBody);
  }
  return amount ? '$' + amount.toFixed(2).toString() : null;
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
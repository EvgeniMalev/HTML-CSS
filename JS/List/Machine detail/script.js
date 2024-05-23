const details = {};

function enterDetail(id) {
  const element = document.getElementById(id);
  const value = element.value;
  if (value) {
    details[id] = value;
    element.value = ''; // Clear input after entering
    alert(`${id} entered: ${value}`);
  } else {
    alert('Please enter a value');
  }
}

function finish() {
  let resultPage = window.open('', 'ResultPage', 'width=800,height=600');
  resultPage.document.write('<html><head><title>Results</title></head><body>');
  resultPage.document.write('<h1>Entered Details</h1>');
  resultPage.document.write('<ul>');
  
  for (let key in details) {
    resultPage.document.write(`<li>${key}: ${details[key]}</li>`);
  }
  
  resultPage.document.write('</ul>');
  resultPage.document.write('</body></html>');
  resultPage.document.close();
}

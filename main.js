var main = document.querySelector('main');
var form = document.createElement('form');
var title = document.createElement('h1');
form.action = "#";
form.method = "push";
main.appendChild(title);
main.appendChild(form);

title.textContent = "Sign Up For My Web App";

for (i in formData) {
  if (formData[i].type === "textarea") {
    var element = document.createElement('textarea')
    element.rows = 5;
  } else if (formData[i].type === "select") {
    var element = document.createElement('select')
    element.innerHTML = '<option value="" disabled selected>' + formData[i].label + '</option>';
    for (j in formData[i].options) {
      var option = document.createElement('option')
      option.label = formData[i].options[j].label;
      option.value = formData[i].options[j].value;
      element.appendChild(option);
    }
  } else {
    var element = document.createElement('input')
  }
  element.id = formData[i].id;
  // element.type = formData[i].type;
  element.placeholder = formData[i].label;
  form.appendChild(element);
  // console.log(element);
}

var submitDiv = document.createElement('div')
var formSubmit = document.createElement('input');
formSubmit.type = "submit";
formSubmit.value = "Submit Form";
formSubmit.id = "submit-btn";
// formSubmit.innerHTML = "Submit Form!";
form.appendChild(submitDiv);
submitDiv.appendChild(formSubmit);

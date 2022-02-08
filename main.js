var text;
var html = "";
var inds;
var keys;

const brothers = [
  "Please choose",
  "John",
  "Brad",
  "Alia",
  
];


for (let i = 0; i < brothers.length; i++) {
  html += `<option>${brothers[i]}</option>`;
}
document.getElementById("selec").innerHTML = html;

const John = {
  name: "John",
  surname: "Onix",
  age: 37,
  MaritalStatus: "Single",
  job: "Physical Education Teacher",
  MaritalStatus: "Married",
  Child: 2,
};

const Brad = {
  Name: "Brad",
  Surname: "Onix",
  Age: 37,
  Job: "Physical Education Teacher",
  MaritalStatus: "Married",
  Child: 1,
};
const Alia = {
  Name: "Alia",
  Surname: "Onix",
  Age: 25,
  Job: "Artist",
  MaritalStatus: "Single",
  
};

function selec(element) {
  text = element.options[element.selectedIndex].value;

  inds = element.selectedIndex;
  console.log(inds);
  var bild = document.getElementById("bb").textContent = text;
  
  if (!inds == 0) {
    switch (inds) {
      case 1:
        var ekl = "";
        for (const [key, value] of Object.entries(John)) {
          ekl += `<li> <b>${key}:</b> <span>${value}</span></li>`;
        }
        document.getElementById("p").innerHTML = ekl;
        break;
      case 2:
        var ekl = "";
        for (const [key, value] of Object.entries(Brad)) {
          ekl += `<li> <b>${key}:</b> <span>${value}</span></li>`;
        }
        document.getElementById("p").innerHTML = ekl;
        break;
        case 3:
          var ekl = "";
        for (const [key, value] of Object.entries(Alia)) {
          ekl += `<li> <b>${key}:</b> <span>${value}</span></li>`;
        }
        document.getElementById("p").innerHTML = ekl;
        break;
      default:
        break;
    }
  } else {
    var warn = "Please Choose...";

    document.getElementById(
      "p"
    ).innerHTML = `<li style="color:red; font-size:20px; font-weight:bold;">${warn}</li>`;
  }
}


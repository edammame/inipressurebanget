var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Please fill the require data!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely Obese';
     }
  

resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function underweight(link) {
  console.log(link.value)
  window.open("https://www.healthline.com/nutrition/how-to-gain-weight#Which-food-is-best-for-weight-gain?", "_blank")
}

function overweight(link) {
  console.log(link.value)
  window.open("https://www.self.com/story/workout-tips", "_blank")
}

function obese(link) {
  console.log(link.value)
  window.open("https://health.usnews.com/best-diet/best-healthy-eating-diets", "_blank")
}

function extreme(link) {
  console.log(link.value)
  window.open("https://anticancerlifestyle.org/diet-landing-page/?adgroup=Healthy%20Eating&utm_source=google&utm_medium=cpc&utm_campaign=Vital%20-%20Diet%20-%20Max%20Conversions&utm_term=how%20to%20eat%20healthy&utm_content=662037967845&hsa_acc=5646275131&hsa_cam=20249451282&hsa_grp=150605229056&hsa_ad=662037967845&hsa_src=g&hsa_tgt=kwd-111655785&hsa_kw=how%20to%20eat%20healthy&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwtuOlBhBREiwA7agf1nfVJiGi3F5N6LINPcSY2IfWAbzP_QIo1vGtq8Xa7rDoTcXdjRgqBxoCC34QAvD_BwE", "_blank")
}
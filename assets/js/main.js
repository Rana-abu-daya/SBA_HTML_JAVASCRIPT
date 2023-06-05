function validateForm() {

    let validCheck = true;
    checked = $("input[name=base]:checked").length;
        if(checked<1) {
            x = document.querySelector(".required");
            x.style.color='red'
            x.innerHTML = 'you must choose at least one';
            validCheck= false;
        }else{
        x = document.querySelector(".required");
         x.innerHTML = '';
            validCheck= true;
        }


    let validCheckTopping = true;
    checked = $("input[name=topping]:checked").length;
        if(checked<1) {
           let  x = document.querySelector(".requiredT");
            x.style.color='red'
            x.innerHTML = 'you must choose at least one';
            validCheckTopping= false;
        }else{
        let x = document.querySelector(".requiredT");
         x.innerHTML = '';
            validCheckTopping= true;
        }
        let optradio = true;
    checked = $("input[name=optradio]:checked").length;
        if(checked<1) {
           let  x = document.querySelector(".requiredD");
            x.style.color='red'
            x.innerHTML = 'you must choose one';
            optradio= false;
        }else{
        let x = document.querySelector(".requiredD");
         x.innerHTML = '';
            optradio= true;
        }

     let protein = true;
    checked = $("input[name=protein]:checked").length;
        if(checked<1) {
           let  x = document.querySelector(".requiredP");
            x.style.color='red'
            x.innerHTML = 'you must choose one';
            protein= false;
        }else{
        let x = document.querySelector(".requiredP");
         x.innerHTML = '';
            protein= true;
        }

    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("step");
    //console.log(x[currentTab]);
    //console.log(currentTab);
    y = x[currentTab].querySelectorAll('input[type=text]');
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {

    // If a field is empty...
    if (y[i].value == "") {
    // add an "invalid" class to the field:
    y[i].className += " invalid";
    // and set the current valid status to false
    valid = false;

    }else{
        if(y[i].name =='mobile'){
        if(!phonenumber(y[i]))
        y[i].className += " invalid";
        valid = valid && phonenumber(y[i]);
        }
   }
    }
    //console.log("here"+valid + validCheckTopping + validCheck);
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
    document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
    }
    return (valid && validCheck && validCheckTopping && optradio && protein); // return the valid status
}


function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
  {
  let x = document.querySelector(".emailValidation");

          x.innerHTML = '';
      return true;
  }
  else
  {
      let x = document.querySelector(".emailValidation");
       x.style.color='red'
       x.innerHTML = 'Mobile number must be 10 digits';
     return false;
  }
  }

function insertOrder(){

    const radioButtons = document.querySelectorAll('input[name="optradio"]');
    let selectedDressing;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
                  selectedDressing = radioButton.nextSibling.textContent;
                    break;
    }
    }

    const radioButtonsprotein = document.querySelectorAll('input[name="protein"]');
        let selectedprotein;
        for (const radioButton of radioButtonsprotein) {
            if (radioButton.checked) {
           // console.log(radioButton.nextSibling);
                      selectedprotein = radioButton.nextSibling.textContent;
                        break;
            }
        }

    var bases = $("input[name=base]:checked")
     var base;
      if(bases.length>0){
       base =document.createElement('ul');
            for (let i = 0; i < bases.length; i++) {
              var li=document.createElement('li');
              li.innerHTML=$("#"+bases[i].id).next("label").html();
              base.appendChild(li);
          }
          //document.getElementById('twitter_status').appendChild(ul);
      }


         var toppings = $("input[name=topping]:checked")

           var topping;
            if(toppings.length>0){
             topping =document.createElement('ul');
                  for (let i = 0; i < toppings.length; i++) {
                    var li=document.createElement('li');
                    li.innerHTML=$("#"+toppings[i].id).next("label").html();
                    topping.appendChild(li);
                }
                }
                document.getElementById('order').innerHTML='';
                var h =document.createElement('h4');
                h.textContent = "Bases:";
                document.getElementById('order').appendChild(h);
                document.getElementById('order').appendChild(base);
                 var h =document.createElement('h4');
                 h.textContent = "Toppings:";
                document.getElementById('order').appendChild(h);
                document.getElementById('order').appendChild(topping);
                var h =document.createElement('h4');
                h.textContent = "Dressing: "+selectedDressing;
                document.getElementById('order').appendChild(h);
                var h =document.createElement('h4');
                h.textContent = "Protein: "+selectedprotein;
                document.getElementById('order').appendChild(h);

}
function insertInfo(){
        document.getElementById('info').innerHTML='';
        let name= document.getElementById('Full_name').value;
        let address = document.getElementById('address').value;
        let mobile = document.getElementById('mobile').value;
        var h =document.createElement('h4');
        h.textContent = "Name: "+name;
        document.getElementById('info').appendChild(h);
        var h =document.createElement('h4');
        h.textContent = "Mobile: "+mobile;
        document.getElementById('info').appendChild(h);
        var h =document.createElement('h4');
        h.textContent = "Address: "+address;
        document.getElementById('info').appendChild(h);


}
function submit(){

window.open("done.html","_self")


}

function ValidbeforeSubmit(){
 const cb = document.querySelector('#orderCheck');
 console.log(cb.checked);infoCheck
 const or = document.querySelector('#infoCheck');

 if(!cb.checked ||  !or.checked){
 alert("You should confirm the order and information before submit by check the checkbox");
 return false;
 }
  return true;
}
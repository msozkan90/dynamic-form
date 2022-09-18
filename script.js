var survey_options = document.getElementById('survey_options');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');
var field_type = document.getElementById('field_type');
//var tag_type = document.getElementById('tag_type');
var field_label= document.getElementById('field_label');


add_more_fields.onclick = function(){
    if(field_type.value == "" || field_label.value == "" ){

    }
    else{
    console.log(field_type.value)
    console.log(field_label.value)
    let random=makeid(10)
    //console.log(tag_type.value)
    var newDiv = document.createElement("div");
    var newButton = document.createElement("button");
    var newButIcon = document.createElement("i");
    newDiv.setAttribute('class',"mt-3");
    newDiv.setAttribute('class',field_label.value);
    newDiv.setAttribute('id',random);
    newButIcon.setAttribute('class',"fa fa-minus");
    newButton.setAttribute('class',"btn btn-danger minus_button");
    newButton.setAttribute('id',"minus_button");
    newButton.setAttribute('name',random);
    newButton.appendChild(newButIcon);


    var newLabel = document.createElement("label");
    if(field_type.value == "select"){
      var newField = document.createElement(field_type.value);
      var newOption = document.createElement("option");
      newOption.innerHTML="Option"
      newField.appendChild(newOption);

    }
    else{
      var newField = document.createElement("input");
    }
    
      newLabel.setAttribute('id',field_label.value);
      newLabel.innerHTML=field_label.value;
    
      newField.setAttribute('id',field_label.value);
      newField.setAttribute('type',field_type.value);
      newField.setAttribute('name',field_label.value);
      newField.setAttribute('class',"form-control");
    // newField.setAttribute('size',50);
      newField.setAttribute('placeholder',field_label.value);
      newDiv.appendChild(newLabel);
      newDiv.appendChild(newField);
      newDiv.appendChild(newButton);
      survey_options.appendChild(newDiv);
   
      field_label.value=""
      field_type.value=""
      myFunc()
    }

}
myFunc()
remove_fields.onclick = function(){
  var input_tags = survey_options.getElementsByTagName('input');
  if(input_tags.length > 2) {
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
  }
}

function myFunc() {
  let minus_button= document.getElementsByClassName('minus_button');
 // let div_id = document.getElementById(field_label.value);
  if(minus_button == undefined)
  {
  
  }
  else{

    // for (let i = 0; i < minus_button.length; i++) {
    //   minus_button[i].onclick = function(){
    //     console.log(`CLICK ${i}`)
    //     console.log(minus_button[i].name)
    //     let div_id = document.getElementById(minus_button[i].name);
    //     div_id.remove()
    //   }
    // }
    console.log(minus_button)
    minus_button.forEach(myFunction)
    function myFunction(item) {
      console.log(item)
    }
  


  }
  
}




function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
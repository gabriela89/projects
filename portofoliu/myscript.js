var myField= document.theform.phone;
var myError= document.getElementById('formerror');
myField.onfocus=function(){
    var myPattern = new RegExp("\\d{4}[\\-]\\d{6}", "i");
    var isValid = this.value.search(myPattern)>= 0;
    if(!(isValid)){
        myError.innerHTML="Input does not match expected pattern. xxxx-xxxxxx";

    }
    else{
        //pattern not valid
        myError.innerHTML = "";
    }//pattern is Valid

}//myField has changed

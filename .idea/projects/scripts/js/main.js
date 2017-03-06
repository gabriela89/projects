//$('paragraf').css('color','red');
//$(window).on('load',function(){
//$('$paragraf').css('color','red');
  //  var plus=function(x,y){
    //    return x+y;
    //};
    //var rez=plus(1,2);
//});

//clasa
var Student=function(){
    var nume;
    this.setNume=function(nume){
        this.nume=nume;
    };
     this.faCurat=function(){
        alert("Doar daca....");
    };
};
//obiectul
Student gabriela=new Student();
//proprietati
gabriela.nume= "Gabriela";

//functie
//gabriela.faCurat();
gabriela.setNume("Andrei");
//alert(gabriela.getNume());
$.get("http://api.fixer.io/latest",{},function(response){
   
    
});

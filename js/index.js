
$(document).ready(function(){
  var key ='';
  var percentVal = 0.0;
  var ans = math.parser();
  var onScreen='';
  var equation ='';
  var first = true;
  var clear='';
  var values = [];
  var percentPreceding = true;
  var canOperate = true;
  
   $('button').click(function() {
     key = $(this).attr("value");
     
     if(key === "clear"){
       onScreen ='';
       key='';
       first=true;
       $(".screen").html('0');
     }
     
     if(parseInt($(".screen").text()) != 0 && key === "pos_neg"){
       onScreen = parseFloat($(".screen").text());
       onScreen *= -1;
       $(".screen").html(onScreen);
     }
     
     switch(key){
       case '1':
         if(first) { 
            $(".screen").html('1'); 
            first = false;
            canOperate= true;}
         else{
            $(".screen").append('1');
            canOperate= true;}
         break;
       case '2':
          if(first) { 
            $(".screen").html('2'); 
            first = false;
            canOperate= true;}
         else{
            $(".screen").append('2');
            canOperate= true;}
         break;
       case '3':
          if(first) { 
            $(".screen").html('3'); 
            first = false;
            canOperate= true;}
         else{
            $(".screen").append('3');
            canOperate= true;}
         break;
       case '4':
         if(first) { 
            $(".screen").html('4'); 
            first = false;
            canOperate= true;}
         else{
            $(".screen").append('4');
            canOperate= true;}
         break;
       case '5':
        if(first) { 
            $(".screen").html('5'); 
            first = false;
            canOperate= true;}
         else{
            $(".screen").append('5'); 
            canOperate= true;}
         break;
       case '6':
        if(first) { 
            $(".screen").html('6'); 
            first = false;
            canOperate= true;}
         else{
            $(".screen").append('6');
            canOperate= true;}
         break;
       case '7':
        if(first) { 
            $(".screen").html('7'); 
            first = false;
            canOperate= true;}
         else{
            $(".screen").append('7');
            canOperate= true;}
         break;
       case '8':
        if(first) { 
            $(".screen").html('8'); 
            first = false;
            canOperate= true;}
         else{
            $(".screen").append('8');
            canOperate= true;}
         break;
       case '9':
          if(first) { 
           $(".screen").html('9'); 
           first = false;
           canOperate= true;}
         else{
            $(".screen").append('9');
            canOperate= true;}
         break;
       case '0':
         if(first) { 
            $(".screen").html('0');
            first = false;
            canOperate= true;}
         else{
            $(".screen").append('0');
            canOperate= true;}
          break;
       case '.':
         if(first){
           $(".screen").html('0.');
           first = false;
           canOperate= false;
         }
         else{
           $(".screen").append('.');
           canOperate = false;
         }
         break;
       case '+':
        if((percentPreceding && canOperate) || (!first && canOperate)){
            onScreen = parseFloat($(".screen").text());
            console.log(onScreen);
            values.push(onScreen);
            values.push('+');
            first=true;
            canOperate=false;
          }
         break;
       case '-':
         if((percentPreceding && canOperate) || (!first && canOperate)){
            onScreen = parseFloat($(".screen").text());
            values.push(onScreen);
            values.push('-');
            first=true;
            canOperate= false;
          }
         break;
       case '*':
         if((percentPreceding && canOperate) || (!first && canOperate)){
           onScreen = parseFloat($(".screen").text());
           values.push(onScreen);
           values.push('*');
           first=true;
           canOperate =false;
         }
         break;
       case '/':
        if((percentPreceding && canOperate) || (!first && canOperate)){
           onScreen = parseFloat($(".screen").text());
           values.push(onScreen);
           values.push('/');
           first = true;
           canOperate = false;
         }
         break;
       case '%':
        if((percentPreceding && canOperate) || (!first && canOperate)){
           onScreen =parseFloat($(".screen").text());
           percentVal = onScreen/100;
           $(".screen").html(percentVal);
           first = true;
           percentPreceding= true;
           canOperate = true;
         }
       case '=':
         if(!first && canOperate){
           onScreen = parseFloat($(".screen").text());
           values.push(onScreen);
           console.log(values);
           while(values.length!=0){
             equation+=values.shift();
           }
          
           $('.screen').html(ans.eval(equation));
           equation='';
           first=true;
           canOperate = true;
         }
           break;
     }
   });
});
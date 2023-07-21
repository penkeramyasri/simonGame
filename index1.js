var e=0;
var j=0;
console.log(e);
console.log(j);
var clickCount=0;
var randomCounter=1;
var arrayClick=[];
var randomArray=[];
console.log(arrayClick);
console.log(randomArray);
var y=0;
var d=0;
var f= 0;
var m=0;
var s=0;

function outOfGame(){
  alert("no way");
   //background-color
   $("body").css(
    "background-color","red");
    setTimeout( function() {
      $("body").css(
      "background-color","#011f3f");
    },250);
    var color = new Audio("sounds/wrong.mp3");
    color.play();
    var color = new Audio("sounds/"+p+".mp3");
    color.play();
    e= "Game Over, Press Any Key to Restart";
      $("h1").text(e);
 }



if ($("h1").text()==="Press A Key to Start"){
    q= $("h1").text();
    console.log(q);

   $(document).keydown(function(){

    h=event.key;
    if ($("h1").text()==="Press A Key to Start"|| "Game Over, Press Any Key to Restart"){

      
      $("h1").text("Level 1");
      randomNumber= (Math.floor((Math.random()*4)+1));
  setTimeout( function() {
        if(randomNumber===1){
      $("#green").addClass("pressed");
      setTimeout( function() {$("#green").removeClass("pressed"); randomNumber="green";
      randomArray[-2]=randomArray.push(randomNumber);
 alert(randomArray); 
    },190);}else
      if(randomNumber===2){
        $("#red").addClass("pressed");
        setTimeout( function() {$("#red").removeClass("pressed"); randomNumber="red";
      randomArray[-2]=randomArray.push(randomNumber);
 alert(randomArray);  },190); }else
      if(randomNumber===3){
        $("#yellow").addClass("pressed");
        setTimeout( function() {$("#yellow").removeClass("pressed"); randomNumber="yellow";
      randomArray[-2]=randomArray.push(randomNumber);
 alert(randomArray);  },190);}else 
      if(randomNumber===4){
        $("#blue").addClass("pressed");
        setTimeout( function() {$("#blue").removeClass("pressed"); randomNumber="blue"; 
      randomArray[-2]=randomArray.push(randomNumber);
 alert(randomArray); },190); }},450);
    }
  else{
    alert("Please don't click the KEY BOARD KEY "+h+"  in the middle of the most interesting game");
  }

  });
  
  
 }else{alert("Hey");
 }
 
function pressButtonsByCode(e){
  if ($("h1").text()==="Press A Key to Start"|| $("h1").text()==="Level "+(e)){
   /*  randomCounter++;
    randomArray[-2]=randomArray.push(randomNumber); */
 alert(randomArray);
console.log("randomCounter "+randomCounter);
    /* q= $("h1").text(); */
   
    
  
    e++;
       $("h1").text("Level "+(e));
       randomNumber= (Math.floor((Math.random()*4)+1));
   setTimeout( function() {
         if(randomNumber===1){
       $("#green").addClass("pressed");
       setTimeout( function() {$("#green").removeClass("pressed"); randomNumber="green"; 
       randomArray[-2]=randomArray.push(randomNumber);
 alert(randomArray);
     },190);}else
       if(randomNumber===2){
         $("#red").addClass("pressed");
         setTimeout( function() {$("#red").removeClass("pressed"); randomNumber="red";
        randomArray[-2]=randomArray.push(randomNumber);
 alert(randomArray);  },190); }else
       if(randomNumber===3){
         $("#yellow").addClass("pressed");
         setTimeout( function() {$("#yellow").removeClass("pressed"); randomNumber="yellow";
        randomArray[-2]=randomArray.push(randomNumber);
 alert(randomArray);  },190);}else 
       if(randomNumber===4){
         $("#blue").addClass("pressed");
         setTimeout( function() {$("#blue").removeClass("pressed"); randomNumber="blue"; 
        randomArray[-2]=randomArray.push(randomNumber);
 alert(randomArray); },190); }},450);
     }else{alert("oyee");
} console.log(randomNumber);
}

 




$(".btn").on("click",function(){ 
p=this.getAttribute("id");
console.log(p);
clickCount++;
console.log("clickCount "+clickCount);

arrayClick[-2]=arrayClick.push(p);
console.log(arrayClick);
/* alert(arrayClick); */

h=$("h1").text();
/* console.log(h); */
if(h==="Press A Key to Start"||h==="Game Over, Press Any Key to Restart" ){
  musicWhenClickedButtonsDirectly(p);
}else
{
mainLogic();
}
});
    
function musicWhenClickedButtonsDirectly(p){

//animation
$("#"+p).addClass("pressed");
         setTimeout( function() {
          $("#"+p).removeClass("pressed");
        },250);

        //background-color
        $("body").css(
          "background-color","red");
          setTimeout( function() {
            $("body").css(
            "background-color","#011f3f");
          },250);
//Audio
  var color = new Audio("sounds/wrong.mp3");
  color.play();
  var color = new Audio("sounds/"+p+".mp3");
  color.play();
      /* q=$("h1").text(); */
    /*   console.log(q);  */
      q= "Game Over, Press Any Key to Restart";
      $("h1").text(q); 

      setTimeout( function() {
        if ($("h1").text()==="Game Over, Press Any Key to Restart"){
          $(document).keydown(function(){
            $("h1").text("Level 1");
          });
          
        }
        else{
          alert("Hello world");
        }
      },250);
      
}

function mainLogic(){
 
  //animation
$("#"+p).addClass("pressed");
setTimeout( function() {
 $("#"+p).removeClass("pressed");
},250);
var color = new Audio("sounds/"+p+".mp3");
 color.play();
/*  var arrayClick=[];
var randomArray=[]; */

//test 

/* randomArray[-2]=randomArray.push(randomNumber);
 alert(randomArray); */






/* if (arrayClick.length>randomArray.length)
{
  alert(arrayClick.length);
alert(randomArray.length);

}
else{
alert("arrayClick.length>randomArray");
}

 */




/*  for (var q = 0; q < arrayClick.length; q++) {

  if (arrayClick[q] !== randomArray[q]) {
    result= false;
  } else {
      result = true;
  }
} */

 if(true){
 j++;
  t= "Level "+j;
  $("h1").text(t);

 if (clickCount===1) {
  pressButtonsByCode(j);
}


//randomclick==2

/* else if (clickCount==2){       

if(randomArray[0]===arrayClick[1]){
  alert("You are half way down");}
  else {
    outOfGame();
    alert("no way");
  }
}


else if(clickCount==3){    
  if(randomArray[1]===arrayClick[2]){
    pressButtonsByCode(j);
    alert("You are good");}
    else {
      outOfGame();
      alert("no way");
    }
} */



else if (clickCount>2){


//for(k=3;k<5;k++){

   

    for(v=2;v<=randomArray.length;v++){
        function sumOfSeries(n)
            {
                let sum = 0;
                for (let i = 1 ; i <= n ; i++)
                    
                        sum += i;
                return sum+1;
            }
            let n = v;
              
                var k=sumOfSeries(n);
                console.log(k);
        }
         console.log(k);
        
        
       /*   var m=0;
         m=sumOfSeries(n); */     



 if(clickCount<(k)) {

  for(var y=0; y<=randomArray.length;y++){
  
  
  if(clickCount==(y+k-randomArray.length))  {
    
    if(randomArray[y]===arrayClick[y+k-(randomArray.length)-(1)]){
      alert("You have reached "+(y+1) +" Steps" );
  
      if (y===randomArray.length-1) {
        pressButtonsByCode(j);
      } else {
        alert("did not reach yet");
        console.log("did not reach yet");
      }
      
     }
      else {
        outOfGame();
        alert("no way");
      }
  
  }
    
  }
  }


 //}


}





















else if(clickCount<4) {

  for(var y=0; y<=randomArray.length;y++){
  
  
  if(clickCount==(y+2))  {
    
    if(randomArray[y]===arrayClick[y+1]){
      alert("You have reached "+(y+1) +" Steps" );
  
      if (y===randomArray.length-1) {
        pressButtonsByCode(j);
      } else {
        alert("did not reach yet");
        console.log("did not reach yet");
      }
      
     }
      else {
        outOfGame();
        alert("no way");
      }
  
  }
    
  }
  }















//random =3

/* 
  else if(clickCount==4)  {
    if(randomArray[0]===arrayClick[3]){
      alert("You are 1/3rd  way down");}
      else {
        outOfGame();
        alert("no way");
      }

}


else if(clickCount==5)  {
  if(randomArray[1]===arrayClick[4]){
    alert("You are 2/3rd  way down");}
    else {
      outOfGame();
      alert("no way");
    }

}


else if(clickCount==6)  {
  
  if(randomArray[2]===arrayClick[5]){
    alert("You are 3/3rd  way down");
    pressButtonsByCode(j);
   }
    else {
      outOfGame();
      alert("no way");
    }

} */


else if(clickCount<7) {

  for(var y=0; y<=randomArray.length;y++){
  
  
  if(clickCount==(y+4))  {
    
    if(randomArray[y]===arrayClick[y+3]){
      alert("You have reached "+(y+1) +" Steps" );
  
      if (y===randomArray.length-1) {
        pressButtonsByCode(j);
      } else {
        alert("did not reach yet");
        console.log("did not reach yet");
      }
      
     }
      else {
        outOfGame();
        alert("no way");
      }
  
  }
    
  }
  }












//random ==4

 
 
 
 /* { 


 alert(randomArray.length);
alert(arrayClick.length); 

for(y=d; y<=randomArray.length;y++){


if(clickCount==(y+(arrayClick.length)))  {
  f= arrayClick.length;
  if(randomArray[y]==arrayClick[y+(f)-1]){
    alert("You have reached "+(y+1) +" Steps" );
d++;
    if (y===randomArray.length-1) {
      pressButtonsByCode(j);
    } else {
      alert("did not reach yet");
      console.log("did not reach yet");
    }
    
   }
    else {
      outOfGame();
      alert("no way");
    }

}
  
} 
 }

 */

 
//random ==4
//manual click ==6+4

else if(clickCount<11) {

for(var y=0; y<=randomArray.length;y++){


if(clickCount==(y+7))  {
  
  if(randomArray[y]===arrayClick[y+6]){
    alert("You have reached "+(y+1) +" Steps" );

    if (y===randomArray.length-1) {
      pressButtonsByCode(j);
    } else {
      alert("did not reach yet");
      console.log("did not reach yet");
    }
    
   }
    else {
      outOfGame();
      alert("no way");
    }

}
  
}
}




//random= 5

//manual click ==10+5

else if(clickCount<16) {


for(var y=0; y<=randomArray.length;y++){


  if(clickCount==(y+11))  {
    
    if(randomArray[y]===arrayClick[y+10]){
      alert("You have reached "+(y+1) +" Steps" );
  
      if (y===randomArray.length-1) {
        pressButtonsByCode(j);
      } else {
        alert("did not reach yet");
        console.log("did not reach yet");
      }
      
     }
      else {
        outOfGame();
        alert("no way");
      }
  
  }
    
  }

}








}
  
  
  else{
  alert("no way");
   //background-color
   $("body").css(
    "background-color","red");
    setTimeout( function() {
      $("body").css(
      "background-color","#011f3f");
    },250);
    var color = new Audio("sounds/wrong.mp3");
    color.play();
    var color = new Audio("sounds/"+p+".mp3");
    color.play();
    e= "Game Over, Press Any Key to Restart";
      $("h1").text(e); }
 }

 
 



   
  







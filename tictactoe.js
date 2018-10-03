var yesButton=document.getElementById("yes");
var noButton=document.getElementById("no");
var vertical=document.querySelectorAll("#vertical");
var horizontal=document.querySelectorAll("#horizontal");
var both=document.getElementById("both");
var tds=document.querySelectorAll("td");
var h2s=document.querySelectorAll("h2");
var h1=document.querySelector("h1");
var playerX=document.getElementById("x");
var playerO=document.getElementById("o");
var starter;
var table=[];
var player={};
var counter;
var counterX=0;
var counterO=0;


function closeWindow(){
    if(confirm("Would you like to close the window?"))
        close();
}

yesButton.addEventListener("click", function(){

    init();

    vertical.forEach(element => {
        element.classList.add("vertical");
    });
    
    horizontal.forEach(element => {
        element.classList.add("horizontal");
    });

    both.classList.add("horizontal");
    both.classList.add("vertical");
    
    h2s.forEach(element => {
        element.classList.add("tdWhite");
    });
});

function clickable(yes) {

    if(yes){
        tds.forEach(element => {
            element.classList.remove("unclickable");
            element.classList.add("clickable");
        });
    }
    else{

        tds.forEach(element => {
            element.classList.remove("clickable");
            element.classList.add("unclickable");
        });
    }

}

   tds.forEach(element => {
    
        element.addEventListener("click", function() {
            tdClick(element);
           
        });
            
   });
   

function tdClick(element){

    counter++;
    element.classList.remove("tdPlum");
    element.classList.add("tdWhite");
    element.classList.remove("clickable");
    element.classList.add("unclickable");
    var index=Number(element.textContent);
    
    if(starter===0){
        element.textContent="O";
        starter=1;
        table.splice(index,1,true);
    }
    else{
        element.textContent="X";
        starter=0;
        table.splice(index,1,false);
    }
    
    var result=tableChecking(table);
    evaluate(result, counter);
      
}
  

  function evaluate(result, counter) {
      
        if(result==null){
         
        if(counter===9){
        h1Displayer("Nobody is the winner.");
        }
        
        }
        else{
        
           tdsPainter(result);
          
           if(result.sign){
           counterO++;
           h1Displayer("O player is the winner.");
           }
           else{
            counterX++;
           h1Displayer("X player is the winner.");
           }

           scoreDisplayer(playerO, counterO, playerX, counterX, result.sign);
           clickable(false);
          
        }
            
        }


    function scoreDisplayer(playerO, counterO, playerX, counterX, sign){

        if(sign)
        playerO.textContent=counterO;
        else
        playerX.textContent=counterX;

        playerO.classList.remove("tdWhite");
        playerO.classList.add("tdRed");
        playerX.classList.remove("tdWhite");
        playerX.classList.add("tdRed");
        

    }    

    function tdsPainter(result){

            tds[result.indexOne].classList.add("tdGreen");
            tds[result.indexTwo].classList.add("tdGreen");
            tds[result.indexThree].classList.add("tdGreen");
    }


     function h1Displayer(text){

        h1.classList.remove("tdBlueviolet");   
        h1.classList.add("tdRed");
        h1.textContent=text;

     }   

     function init() {

        starter=Math.floor(Math.random()*2);
        table=[];

        for(var i=0; i<9; i++){
        table.push(null);
        tds[i].textContent=i;
        tds[i].classList.remove("tdGreen");
        tds[i].classList.add("tdPlum");
        }

        player.sign=null;
        player.indexOne=null;
        player.indexTwo=null;
        player.indexThree=null;
       
        h1.textContent="Tic-Tac-Toe Game"
        h1.classList.remove("tdRed");
        h1.classList.add("tdBlueviolet");

        playerO.classList.remove("tdRed");
        playerO.classList.add("tdWhite");
        playerX.classList.remove("tdRed");
        playerX.classList.add("tdWhite");

        yesButton.textContent="Next Game";
        noButton.textContent="Exit";

        counter=0;

        clickable(true);
        
     }   

     function tableChecking(table) {


        if(table[0]!=null && table[1]!=null && table[2]!=null && table[0] && table[1] && table[2]){
            player.sign=true;
            player.indexOne=0;
            player.indexTwo=1;
            player.indexThree=2;
            return player;
        }
        else if(table[0]!=null && table[4]!=null && table[8]!=null && table[0] && table[4] && table[8]){
            player.sign=true;
            player.indexOne=0;
            player.indexTwo=4;
            player.indexThree=8;
            return player;
            
        }
        else if(table[0]!=null && table[3]!=null && table[6]!=null && table[0] && table[3] && table[6]){
            player.sign=true;
            player.indexOne=0;
            player.indexTwo=3;
            player.indexThree=6;
            return player;
            
        }
        else if(table[1]!=null && table[4]!=null && table[7]!=null && table[1] && table[4] && table[7]){
            player.sign=true;
            player.indexOne=1;
            player.indexTwo=4;
            player.indexThree=7;
            return player;
            
        }
        else if(table[2]!=null && table[4]!=null && table[6]!=null && table[2] && table[4] && table[6]){
            player.sign=true;
            player.indexOne=2;
            player.indexTwo=4;
            player.indexThree=6;
            return player;
            
        }
        else if(table[2]!=null && table[5]!=null && table[8]!=null && table[2] && table[5] && table[8]){
            player.sign=true;
            player.indexOne=2;
            player.indexTwo=5;
            player.indexThree=8;
            return player;
            
        }
        else if(table[3]!=null && table[4]!=null && table[5]!=null && table[3] && table[4] && table[5]){
            player.sign=true;
            player.indexOne=3;
            player.indexTwo=4;
            player.indexThree=5;
            return player;
            
        }
        else if(table[6]!=null && table[7]!=null && table[8]!=null && table[6] && table[7] && table[8]){
            player.sign=true;
            player.indexOne=6;
            player.indexTwo=7;
            player.indexThree=8;
            return player;
            
        }
        else if(table[0]!=null && table[1]!=null && table[2]!=null && !table[0] && !table[1] && !table[2]){
            player.sign=false;
            player.indexOne=0;
            player.indexTwo=1;
            player.indexThree=2;
            return player;
        }
        else if(table[0]!=null && table[4]!=null && table[8]!=null && !table[0] && !table[4] && !table[8]){
            player.sign=false;
            player.indexOne=0;
            player.indexTwo=4;
            player.indexThree=8;
            return player;
            
        }
        else if(table[0]!=null && table[3]!=null && table[6]!=null && !table[0] && !table[3] && !table[6]){
            player.sign=false;
            player.indexOne=0;
            player.indexTwo=3;
            player.indexThree=6;
            return player;
            
        }
        else if(table[1]!=null && table[4]!=null && table[7]!=null && !table[1] && !table[4] && !table[7]){
            player.sign=false;
            player.indexOne=1;
            player.indexTwo=4;
            player.indexThree=7;
            return player;
            
        }
        else if(table[2]!=null && table[4]!=null && table[6]!=null && !table[2] && !table[4] && !table[6]){
            player.sign=false;
            player.indexOne=2;
            player.indexTwo=4;
            player.indexThree=6;
            return player;
            
        }
        else if(table[2]!=null && table[5]!=null && table[8]!=null && !table[2] && !table[5] && !table[8]){
            player.sign=false;
            player.indexOne=2;
            player.indexTwo=5;
            player.indexThree=8;
            return player;
            
        }
        else if(table[3]!=null && table[4]!=null && table[5]!=null && !table[3] && !table[4] && !table[5]){
            player.sign=false;
            player.indexOne=3;
            player.indexTwo=4;
            player.indexThree=5;
            return player;
            
        }
        else if(table[6]!=null && table[7]!=null && table[8]!=null && !table[6] && !table[7] && !table[8]){
            player.sign=false;
            player.indexOne=6;
            player.indexTwo=7;
            player.indexThree=8;
            return player;
            
        }
        else
           
    
          return null;
      }
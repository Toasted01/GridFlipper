const isBlack = (btnId) => {
    document.getElementById(btnId).style.backgroundColor = "white";
}

const isWhite = (btnId) => {
    document.getElementById(btnId).style.backgroundColor = "Black";
}

const getAdjacent = (btnId) => {
    let idInt = parseInt(btnId);
    let btnY = idInt%10;
    let btnX = Math.floor(idInt/10);
    let adjacent = [];
    let xy;

    for(let x = -1; x <= 1; x++){
        for(let y = -1; y <= 1; y++){
            if(x == 0 || y == 0){         
                xy = checkBounds((btnX+x),(btnY+y));
                if(xy != null){
                    adjacent.push(xy);
                }           
            }
        }
    }
    return adjacent;
}

const getXY = (x,y) =>{
    let stringX = x.toString();
    let stringY = y.toString();            
    let xy = stringX.concat(stringY);
    return xy;

}

const checkBounds = (x,y) =>{  
      if(x>0 && x<6){
        if(y>0 && y<6){
            let xy = getXY(x,y);
            return xy;
        }
    }                    
}

const winCondition = async () =>{
    let count = 0;
    for(let x = 1; x <= 5; x++){
        for(let y=1;y<=5;y++){
            let xy = getXY(x,y);
            if( window.getComputedStyle(document.getElementById(xy)).backgroundColor == "rgb(255, 255, 255)")
            {
                count++;
            }
        }
    }
    if(count==25){
        document.getElementById("winner").innerHTML = "!Winner!";
        for(let x = 1; x <= 5; x++){
            for(let y=1;y<=5;y++){
                let xy = getXY(x,y);
                document.getElementById(xy).setAttribute("disabled","disabled");
            }
        }
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

const startBtn = () =>{    
    for(let x = 1; x <= 5; x++){
        for(let y=1;y<=5;y++){
            let xy = getXY(x,y);
            document.getElementById(xy).removeAttribute("disabled");
            document.getElementById(xy).style.backgroundColor = "white";
            document.getElementById("winner").innerHTML = "Click on a square to invert it's color and the adjacent squares too.";
        }
    }
    let x = Math.round(getRandomArbitrary(1,5));
    let y = Math.round(getRandomArbitrary(1,5));
    let blackXY = getXY(x,y);
    console.log(blackXY);
    document.getElementById(blackXY).style.backgroundColor = "black";
}

const flip = (btnId) => {
    let btnArray = getAdjacent(btnId);
    btnArray.forEach(element => {
        let thisBtn = window.getComputedStyle(document.getElementById(element)).backgroundColor;
        (thisBtn == "rgb(0, 0, 0)") ? isBlack(element) : isWhite(element);
    }); 
    console.log("here");
    winCondition();
}
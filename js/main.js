/**
 * function to turn black buttons white
 * @param {*} btnId 
 */
const isBlack = (btnId) => {
    document.getElementById(btnId).style.backgroundColor = "white";
}

/**
 * function to turn white buttons black
 * @param {*} btnId 
 */
const isWhite = (btnId) => {
    document.getElementById(btnId).style.backgroundColor = "Black";
}

/**
 * gets all the adjacent squares as well as the clicked square and puts them in an array to return
 * @param {*} btnId 
 * @returns 
 */
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

/**
 * turns int x,y co ordinates into xy string
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
const getXY = (x,y) =>{
    let stringX = x.toString();
    let stringY = y.toString();            
    let xy = stringX.concat(stringY);
    return xy;

}

/**
 * Checks to see if x,y value are within the boards range
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
const checkBounds = (x,y) =>{  
      if(x>0 && x<6){
        if(y>0 && y<6){
            let xy = getXY(x,y);
            return xy;
        }
    }                    
}

/**
 * Check to see if all 25 squares are white
 * If win condition met disable the board
 */
const winCondition =() =>{
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

/**
 * Get a pure random number between 2 numbers inclusive
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * onClick button that wipes the board clean then produces between 1-5 random black squares on the board
 */
const startBtn = () =>{    
    //wiping the board
    for(let x = 1; x <= 5; x++){
        for(let y=1;y<=5;y++){
            let xy = getXY(x,y);
            document.getElementById(xy).removeAttribute("disabled");
            document.getElementById(xy).style.backgroundColor = "white";
            document.getElementById("winner").innerHTML = "Click on a square to invert it's color and the adjacent squares too.";
        }
    }

    //asigning black squares without dupes
    let count=0;
    let usedSquare = [];    
    usedSquare.push("00");
    while(count<Math.round(getRandomArbitrary(1,5))){
        let x = Math.round(getRandomArbitrary(1,5));
        let y = Math.round(getRandomArbitrary(1,5));
        let blackXY = getXY(x,y);
        let dupe = false;
        
        usedSquare.forEach(element => {
            if(blackXY==element){
                dupe = true;
            }            
        })

        if(dupe==false){
            document.getElementById(blackXY).style.backgroundColor = "black";
            usedSquare.push(blackXY);
            count++;            
        }
    }
}

/**
 * function to flip color of square and adjacent squares then check win condition
 * @param {*} btnId 
 */
const flip = (btnId) => {
    let btnArray = getAdjacent(btnId);
    btnArray.forEach(element => {
        let thisBtn = window.getComputedStyle(document.getElementById(element)).backgroundColor;
        (thisBtn == "rgb(0, 0, 0)") ? isBlack(element) : isWhite(element);
    }); 
    console.log("here");
    winCondition();
}
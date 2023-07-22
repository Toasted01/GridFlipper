const btnClick = (btnId) => {
    let btnArray = getAdjacent(btnId);
    console.log(btnArray);

    btnArray.forEach(element => {
        let thisBtn = window.getComputedStyle(document.getElementById(element)).backgroundColor;
        (thisBtn == "rgb(0, 0, 0)") ? isBlack(element) : isWhite(element);
    });

    //let thisBtn = window.getComputedStyle(document.getElementById(btnId)).backgroundColor;
    //(thisBtn == "rgb(0, 0, 0)") ? isBlack(btnId) : isWhite(btnId);
    
}

const isBlack = (btnId) => {
    console.log("Black", btnId, typeof btnColor);
    document.getElementById(btnId).style.backgroundColor = "white";
}

const isWhite = (btnId) => {
    console.log("White", btnId, typeof btnColor);
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
    console.log(adjacent);
    return adjacent;
}

const checkBounds = (x,y) =>{  
      if(x>0 && x<6){
        if(y>0 && y<6){
            let stringX = x.toString();
            let stringY = y.toString();            
            let xy = stringX.concat(stringY);
            return xy;
        }
    }                    
}
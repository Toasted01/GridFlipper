const btnClick = (btnId) => {
    let thisBtn = window.getComputedStyle(document.getElementById(btnId)).backgroundColor;
    (thisBtn == "rgb(0, 0, 0)") ? isBlack(btnId) : isWhite(btnId);
    
}

const isBlack = (btnId) => {
    console.log("Black", btnId, typeof btnColor);
    document.getElementById(btnId).style.backgroundColor = "white";
}

const isWhite = (btnId) => {
    console.log("White", btnId, typeof btnColor);
    document.getElementById(btnId).style.backgroundColor = "Black";
}
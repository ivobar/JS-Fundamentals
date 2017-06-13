function chessboard(a) {
    let html = '<div class="chessboard">\n';

    for (let row = 0; row < a; row++){
        html+='  <div>\n';
        for (let col = 0; col < a; col++){
            let squareColor='';
            if (row%2===0){
                squareColor = col%2===0 ? 'black' : 'white';
            }else{
                squareColor = col%2===0 ? 'white' : 'black';
            }

            html+=`    <span class="${squareColor}"></span>\n`;
        }
        html+='  </div>\n';
    }

    html+='</div>';

    return html;
}

console.log(chessboard(3));




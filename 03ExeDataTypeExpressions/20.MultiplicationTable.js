function table(a) {
    let html='<table border="1">\n';

    for (let row=0 ; row<=a ; row++){
        html+= row==0 ? ' <tr><th>x</th>' : `<th>${row}</th>`;
    }
    html+='</tr>\n';

    for (let row=1 ; row<=a ; row++){
        html+= ` <tr><th>${row}</th>`;
       for (let col=1 ; col<=a ; col++){
          html+=`<td>${col*row}</td>`;
       }
        html+='</tr>\n';
    }

    html+='</table>';

    return html;
}

console.log(table(10));
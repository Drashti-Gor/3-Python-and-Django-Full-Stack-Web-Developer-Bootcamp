var squares = document.getElementsByTagName("td");
var restart = document.querySelector('#b');

function clearBoard(){
    for(var i=0;i<squares.length;i++){
        squares[i].textContent = '';
    }
};

restart.addEventListener('click',clearBoard);

function change(){
    console.log(this);
    if(this.textContent === ''){
        this.textContent = 'X';
        console.log(this.textContent)
    }
    else if(this.textContent === 'X'){
        this.textContent = 'O';
    }
    else if(this.textContent === 'O'){
        this.textContent = '';
    }
};

for(var i=0;i<squares.length;i++){
    squares[i].addEventListener('click',change);
}

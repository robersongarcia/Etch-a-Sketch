const $container = document.querySelector("#container");
const $rowsInput = document.querySelector("#rows");
const $columnsInput = document.querySelector("#columns");
const $colorPicker = document.querySelector("#colorPicker");

function createSquares(rows = 16,columns = 16){
    let child = $container.lastElementChild; 
    while (child) {
        $container.removeChild(child);
        child = $container.lastElementChild;
    }

    numOfSquares = rows * columns;
    const $fragment = document.createDocumentFragment();
    const width = (800/rows)+"px";
    const height = (800/columns)+"px";
    

    for(let i = 0;i < numOfSquares; i++){        
        const $div = document.createElement("div");        
        $div.classList.add("square");
        $div.style.width = width;
        $div.style.height = height;
        $fragment.append($div);
    }

    $container.append($fragment);
}

$rowsInput.value='16';
$columnsInput.value='16';

createSquares(parseInt($rowsInput.value),parseInt($columnsInput.value));

$rowsInput.addEventListener("change",() => {
    createSquares(parseInt($rowsInput.value),parseInt($columnsInput.value));
})

$columnsInput.addEventListener("change",() => {
    createSquares(parseInt($rowsInput.value),parseInt($columnsInput.value));
})




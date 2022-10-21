const gameBoard = document.querySelector('.game')
const shovel = document.querySelector('#shovel')
const axe = document.querySelector('#axe')
const pickaxe = document.querySelector('#pickaxe')
const wood = document.querySelector('.woodInv')
const rock = document.querySelector('.rockInv')
const leaves = document.querySelector('.leavesInv')
const soil = document.querySelector('.soilInv')
const grass = document.querySelector('.grassInv')


const counter = document.querySelectorAll('.counter')
const gridColumnNumber = 25
const gridRowNumber = 15






let userClick = []

const materialObj = {
    'axe':['leaves','wood'],
    'pickaxe': ['rock'],
    'shovel':['soil','grass']
}

const materialCounter ={
    rock : counter[0], 
    wood : counter[1], 
    leaves : counter[2], 
    soil : counter[3], 
    grass : counter[4]
}
const status1 = {
    selectedTool:null,
    selectedMaterial:null,
    inventory:{
        rock : 0, 
         wood : 0, 
         leaves : 0, 
         soil : 0, 
         grass : 0
    }
};
let material ;

let divTag = ''


// function gridDraw(material, rowStart = 1, rowEnd = 15, columnStart = 1, columnEnd = 25) {
    
//      for (let row = rowStart; row <= rowEnd; row++) {
//         for (let column = columnStart; column <= columnEnd; column++) {
//              objOfBoxes[`${row}.${column}`].classList.add(material);
//         }
//     }
// }
// function landMaker(length = 25) { // grid length
//     gridDraw('grass', 14, 14, 1, length)
//     gridDraw('soil', 15, 20, 1, length);
//     gridDraw('cloud', 5, 5, 9, 13);
//     gridDraw('cloud', 4, 4, 10, 13);
//     gridDraw('cloud', 3, 3, 10, 11);
// }



const sky = []
drawGrid()
function drawGrid() {

    


    let col = 25 // j
    let row = 15 // i
    // let sum = col * row
    for (let i = 0; i < row; i++) {
    
        for(let j = 0; j<col; j++){
        let divTag = document.createElement("div");
        divTag.className = 'sky'
        divTag.id = `${i}-${j}`
        gameBoard.appendChild(divTag) 
        sky.push(divTag)
    }
}
}
// const sky = Array.from(document.querySelectorAll('.sky')) // s
// let options = new Array(375).fill(null);
console.log(sky);


drawBoard()
function drawBoard() {
    
    for(let s = 0; s<sky.length;s++){
        let [i,j] = sky[s].getAttribute("id").split("-")
        console.log(`${i} ${j} `);
        drawGrass(Number(i), Number(j), Number(s))
        drawRock(Number(i), Number(j), Number(s))
        drawTree(Number(i), Number(j), Number(s))
        drawCloud(Number(i), Number(j), Number(s))
    }
    function drawGrass(i,j,s) {
    
        if(i === 10){
            sky[s].classList.add('grass')
            sky[s].classList.remove('sky')
        }else if (i > 10){
            sky[s].classList.add('soil')
            sky[s].classList.remove('sky')
            
        }
        
    }
    function drawRock(i,j,s) {
    
        if(i === 8 &&  i < 10 && j ===4 && j <= 7){
            sky[s].classList.add('rock')
            sky[s].classList.remove('sky')
            
        }
        if(i === 9 && i < 10 && j ===5 && j <= 7){
            sky[s].classList.add('rock')
            sky[s].classList.remove('sky')
            
        }
        if(i === 9 && i < 10 && j ===4 && j <= 7){
            sky[s].classList.add('rock')
            sky[s].classList.remove('sky')
            
        }
        if(i === 9 && i < 10 && j ===6 && j <= 7){
            sky[s].classList.add('rock')
            sky[s].classList.remove('sky')
            
        }
        if(i <10 && i > 7 && j === 16){
            sky[s].classList.add('rock')
            sky[s].classList.remove('sky')
            
        }
        if(i <10 && i > 8 && j === 18){
            sky[s].classList.add('rock')
            sky[s].classList.remove('sky')
            
        }
        
    }


    function drawTree(i,j,s) {
    
        //middle tree
        if(i > 6 &&  i < 10 && j ===12 ){
            sky[s].classList.add('wood')
            sky[s].classList.remove('sky')
            
        }
       
        if(i === 6 && i < 10 && j ===12 && j <= 15){
            sky[s].classList.add('leaves')
            sky[s].classList.remove('sky')
            
        }
        if(i === 6 && i < 10 && j ===11 && j <= 15){
            sky[s].classList.add('leaves')
            sky[s].classList.remove('sky')
            
        }
        if(i === 6 && i < 10 && j ===13 && j <= 15){
            sky[s].classList.add('leaves')
            sky[s].classList.remove('sky')
            
        }
        if(i === 5 && i < 10 && j ===12 && j <= 15){
            sky[s].classList.add('leaves')
            sky[s].classList.remove('sky')
            
        }
        if(i === 5 && i < 10 && j ===13 && j <= 15){
            sky[s].classList.add('leaves')
            sky[s].classList.remove('sky')
            
        }
        if(i === 5 && i < 10 && j ===11 && j <= 15){
            sky[s].classList.add('leaves')
            sky[s].classList.remove('sky')
            
        }
        if(i === 4 && i < 10 && j ===12 && j <= 15){
            sky[s].classList.add('leaves')
            sky[s].classList.remove('sky')
            
        }

        //right tree
        if(i > 6 && i <10 && j ===20 ){
            sky[s].classList.add('wood')
            sky[s].classList.remove('sky')
            
        }
        if(i < 7 && i > 3 && j ===20 ){
            sky[s].classList.add('leaves')
            sky[s].classList.remove('sky')
            
        }
        if(i < 6 && i > 3 && j ===21 ){
            sky[s].classList.add('leaves')
            sky[s].classList.remove('sky')
            
        }
        if(i < 6 && i > 3 && j ===19 ){
            sky[s].classList.add('leaves')
            sky[s].classList.remove('sky')
            
        }

        
        
    }
    function drawCloud(i,j,s) {
       
        //left cloud
        if(i === 1  && j > 2  && j < 7){
            sky[s].classList.add('cloud')
            sky[s].classList.remove('sky')
            
        }
        if(i === 0  && j > 3  && j < 6){
            sky[s].classList.add('cloud')
            sky[s].classList.remove('sky')
            
        }

        // right cloud
        if(i === 1  && j > 10  && j < 17){
            sky[s].classList.add('cloud')
            sky[s].classList.remove('sky')
            
        }
        if(i === 0  && j > 11  && j < 16){
            sky[s].classList.add('cloud')
            sky[s].classList.remove('sky')
            
        }
        if(i === 2  && j > 11 && j < 15){
            sky[s].classList.add('cloud')
            sky[s].classList.remove('sky')
            
        }
    }
}






function startGame () {
    sky.forEach(box => {
        box.addEventListener('click', boxClicked);
    })
    shovel.addEventListener('click',()=>{
        status1.selectedTool = 'shovel'
        status1.selectedMaterial = null
        
       
        console.log('shovel');
    }) 
    axe.addEventListener('click',()=>{
        status1.selectedTool = 'axe'
        status1.selectedMaterial = null
        console.log('axe');
        
    }) 
    pickaxe.addEventListener('click',()=>{
        status1.selectedTool = 'pickaxe'
        status1.selectedMaterial = null
        console.log('pick');
        
        
    }) 

    grass.addEventListener('click',()=>{
        status1.selectedMaterial = 'grass'
        status1.selectedTool = null
    }) 
    rock.addEventListener('click',()=>{
        status1.selectedMaterial = 'rock'
        status1.selectedTool = null
    }) 
    wood.addEventListener('click',()=>{
        status1.selectedMaterial = 'wood'
        status1.selectedTool = null
    }) 
    leaves.addEventListener('click',()=>{
        status1.selectedMaterial = 'leaves'
        status1.selectedTool = null
    }) 
    soil.addEventListener('click',()=>{
        status1.selectedMaterial = 'soil'
        status1.selectedTool = null
    }) 
}
console.log(status1.selectedTool);

function boxClicked(e) {

    if(!status1.selectedTool && !status1.selectedMaterial){
        return;
    }

    boxId = e.target.id
    boxClass= e.target.getAttribute('class') 
    // console.log(status1.inventory[selectedMaterial], status1.selectedMaterial);

    
    if(status1.selectedTool){
        if (materialObj[status1.selectedTool]?.includes(boxClass)){
            e.target.className = "sky"

            status1.inventory[boxClass] += 1
            materialCounter[boxClass].textContent = status1.inventory[boxClass]
            
    }
    }

if(status1.selectedMaterial){
    if(status1.inventory[status1.selectedMaterial]>0 && status1.selectedMaterial){
        e.target.className = status1.selectedMaterial
        status1.inventory[status1.selectedMaterial] -= 1
        // console.log(status1.inventory[selectedMaterial]);
        
    }
}

console.log(status1.selectedMaterial);
    

        
    //     e.target.className = 'soil'
  
    // if(boxClass.includes('soil')){
    //     e.target.classList.add('sky')
    //     e.target.classList.remove('soil')
    // }
    // if(boxClass.includes('grass')){
    //     e.target.classList.add('sky')
    //     e.target.classList.remove('grass')
    // }
    // if(boxClass.includes('rock')){
    //     e.target.classList.add('sky')
    //     e.target.classList.remove('rock')
    // }
    // if(boxClass.includes('wood')){
    //     e.target.classList.add('sky')
    //     e.target.classList.remove('wood')
    // }
    // if(boxClass.includes('leaves')){
    //     e.target.classList.add('sky')
    //     e.target.classList.remove('leaves')
    // }
  
    
}



startGame () 

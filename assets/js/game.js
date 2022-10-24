const gameBoard = document.querySelector('.game')
const shovel = document.querySelector('#shovel')
const axe = document.querySelector('#axe')
const pickaxe = document.querySelector('#pickaxe')
const wood = document.querySelector('.woodInv')
const rock = document.querySelector('.rockInv')
const leaves = document.querySelector('.leavesInv')
const soil = document.querySelector('.soilInv')
const grass = document.querySelector('.grassInv')
const highlightPick = document.querySelector('#pickaxeText')
const highlightAxe = document.querySelector('#axeText')
const highlightShovel = document.querySelector('#shovelText')
const highlightSoil = document.querySelector('#soilText')
const highlightRock = document.querySelector('#rockText')
const highlightWood = document.querySelector('#woodText')
const highlightGrass = document.querySelector('#grassText')
const highlightLeaf = document.querySelector('#leafText')
const button = document.querySelector('button')


const counter = document.querySelectorAll('.counter')
const gridColumnNumber = 25
const gridRowNumber = 15


let userClick = []

const materialObj = {
    axe:['leaves','wood'],
    pickaxe: ['rock'],
    shovel:['soil','grass']
}

let materialCounter ={
    soil : counter[0], 
    rock : counter[1], 
    wood : counter[2], 
    grass : counter[3],
    leaves : counter[4], 
}
let status1 = {
    selectedTool:null,
    selectedMaterial:null,
    inventory:{
        soil : 0, 
        rock : 0, 
         wood : 0, 
         grass : 0,
         leaves : 0, 
    }
};
let material ;

let divTag = ''



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



drawBoard()
function drawBoard() {
    
    for(let s = 0; s<sky.length;s++){
        let [i,j] = sky[s].getAttribute("id").split("-")
        // console.log(`${i} ${j} s${s}`);
        drawGrass(Number(i), Number(j), Number(s))
        drawRock(Number(i), Number(j), Number(s))
        drawTree(Number(i), Number(j), Number(s))
        drawCloud(Number(i), Number(j), Number(s))
        drawBlock(Number(i), Number(j), Number(s))
    }

    function drawBlock(i,j,s) {
        if(i < 4 && j< 25){
            sky[s].classList.add('block')
            sky[s].classList.remove('sky')
        }
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
    gameBoard.addEventListener('click', boxClicked);
  
    shovel.addEventListener('click',()=>{
        status1.selectedTool = 'shovel'
        status1.selectedMaterial = null
        if(status1.selectedTool = 'shovel'){
            highlightPick.style.color = 'white'
            highlightAxe.style.color = 'white'
            highlightShovel.style.color = 'red'
            highlightSoil.style.color = 'white'
            highlightRock.style.color = 'white'
            highlightGrass.style.color = 'white'
            highlightLeaf.style.color = 'white'
            highlightWood.style.color = 'white'
        }
        
       
        console.log('shovel');
    }) 
    axe.addEventListener('click',()=>{
        status1.selectedTool = 'axe'
        status1.selectedMaterial = null
        console.log('axe');
        if(status1.selectedTool = 'axe'){
            highlightPick.style.color = 'white'
            highlightAxe.style.color = 'red'
            highlightShovel.style.color = 'white'
            highlightSoil.style.color = 'white'
            highlightRock.style.color = 'white'
            highlightGrass.style.color = 'white'
            highlightLeaf.style.color = 'white'
            highlightWood.style.color = 'white'
        }
        
       
        
    }) 
    pickaxe.addEventListener('click',()=>{
        status1.selectedTool = 'pickaxe'
        status1.selectedMaterial = null
        console.log('pick');

        
    if(status1.selectedTool = 'pickaxe'){
        highlightPick.style.color = 'red'
        highlightAxe.style.color = 'white'
        highlightShovel.style.color = 'white'
        highlightSoil.style.color = 'white'
        highlightRock.style.color = 'white'
        highlightGrass.style.color = 'white'
        highlightLeaf.style.color = 'white'
        highlightWood.style.color = 'white'
    }
           
            
        
          
    }) 

   

    grass.addEventListener('click',(e)=>{
        status1.selectedMaterial = 'grass'
        status1.selectedTool = null

        if(status1.selectedMaterial = 'grass'){
            highlightSoil.style.color = 'white'
            highlightRock.style.color = 'white'
            highlightGrass.style.color = 'red'
            highlightLeaf.style.color = 'white'
            highlightWood.style.color = 'white'
            highlightPick.style.color = 'white'
        highlightAxe.style.color = 'white'
        highlightShovel.style.color = 'white'
        }
        
      
        
    }) 
    rock.addEventListener('click',()=>{
        status1.selectedMaterial = 'rock'
        status1.selectedTool = null

        if(status1.selectedMaterial = 'rock'){
            highlightSoil.style.color = 'white'
            highlightRock.style.color = 'red'
            highlightGrass.style.color = 'white'
            highlightLeaf.style.color = 'white'
            highlightWood.style.color = 'white'
            highlightPick.style.color = 'white'
        highlightAxe.style.color = 'white'
        highlightShovel.style.color = 'white'
        }
    }) 
    wood.addEventListener('click',(e)=>{
        status1.selectedMaterial = 'wood'
        status1.selectedTool = null
        if(status1.selectedMaterial = 'wood'){
            highlightSoil.style.color = 'white'
            highlightRock.style.color = 'white'
            highlightGrass.style.color = 'white'
            highlightLeaf.style.color = 'white'
            highlightWood.style.color = 'red'
            highlightPick.style.color = 'white'
        highlightAxe.style.color = 'white'
        highlightShovel.style.color = 'white'
        }
    }) 
    leaves.addEventListener('click',()=>{
        status1.selectedMaterial = 'leaves'
        status1.selectedTool = null
        if(status1.selectedMaterial = 'leaves'){
            highlightSoil.style.color = 'white'
            highlightRock.style.color = 'white'
            highlightGrass.style.color = 'white'
            highlightLeaf.style.color = 'red'
            highlightWood.style.color = 'white'
            highlightPick.style.color = 'white'
             highlightAxe.style.color = 'white'
         highlightShovel.style.color = 'white'
        }
    }) 

    soil.addEventListener('click',()=>{
        
        status1.selectedMaterial = 'soil'
        status1.selectedTool = null
        if(status1.selectedMaterial = 'soil'){
            highlightSoil.style.color = 'red'
            highlightRock.style.color = 'white'
            highlightGrass.style.color = 'white'
            highlightLeaf.style.color = 'white'
            highlightWood.style.color = 'white'
            highlightPick.style.color = 'white'
             highlightAxe.style.color = 'white'
         highlightShovel.style.color = 'white'
        }

    
       
        
    }) 


   
    
}


console.log(status1.selectedTool);

function boxClicked(e) {


    if(!status1.selectedTool && !status1.selectedMaterial){
        return;
    }

 
    
    console.log(`new Target : ${e.Target}`);
   
    
  
    


    boxClass= e.target.getAttribute('class') 

    if(boxClass.includes('block') ){
        return
    }
  

    if(status1.selectedTool){
        

        if (materialObj[status1.selectedTool]?.includes(boxClass)){
            e.target.className = "sky"
            
            status1.inventory[boxClass] += 1
            materialCounter[boxClass].textContent = status1.inventory[boxClass]
            
            

            
    }
    }
   
if(status1.selectedMaterial){
    if(!boxClass){
        
        
    }
    if(status1.inventory[status1.selectedMaterial]>0 && status1.selectedMaterial && boxClass == 'sky'){
        e.target.className = status1.selectedMaterial
        
        status1.inventory[status1.selectedMaterial] -= 1
       
        materialCounter[status1.selectedMaterial].textContent = status1.inventory[status1.selectedMaterial]
        
           
        
    }
}

    
console.log(e.target);
        

  
    
}

button.addEventListener('click',()=>{
    // window.location = 'game.html' 

    
 materialCounter ={
    soil : counter[0], 
    rock : counter[1], 
    wood : counter[2], 
    grass : counter[3],
    leaves : counter[4], 
}
 status1 = {
    selectedTool:null,
    selectedMaterial:null,
    inventory:{
        soil : 0, 
        rock : 0, 
         wood : 0, 
         grass : 0,
         leaves : 0, 
    }

    
};
counter[0].textContent = 0
counter[1].textContent = 0
counter[2].textContent = 0
counter[3].textContent = 0
counter[4].textContent = 0
gameBoard.replaceChildren([]);

drawGrid()
drawBoard()

   
    
})

startGame () 


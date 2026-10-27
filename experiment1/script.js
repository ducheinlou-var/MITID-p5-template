
// variable name                    id of the button in html
//      /                                       /
//      V                                       V
let randomButton = document.querySelector("#randomize"); 

randomButton.addEventListener("click", function(){
    background(73); 
    generateStacks(); 
})

function setup(){
    // function that runs only once
    createCanvas(800, 500);
    //to get rid of the borders
    noStroke(); 
}

function draw(){
//    function that runs repeatedly
    
//    we call the function 
//    stackOfCircle(100, 200,"#F000E0");
//     stackOfCircle(400, 300, "#EEDD90");
// we create a loop to generate 10 stacks 

    }
    // we create a function to generate stacks 
function generateStacks (){
for(let i=0; i<10; i++) {
        let randomX = random(0, 800)
        let randomY = random (0,500)
        let randomColor=random(0,255) 
        stackOfCircle(randomX, randomY, randomColor); 
    }
}

// create a function to display a stack of circles 
function stackOfCircle (posX, posY, color){
    fill (color); 
 for(let i = 0; i < 10; i = i + 1 ){
        circle (posX, posY +i*10, 20); 
 }
} 

// a function that is triggered on mouse click
function mousePressed(){
    fill("#FF0000");
    circle(mouseX, mouseY, 50);
}
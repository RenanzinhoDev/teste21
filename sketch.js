let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let vxbolinha = 6;
let vybolinha = -6;
let raio = diametro / 2;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    criarbolinha();
    movimentarbolinha();{
    bateraltura();
    baterlargura();
    }
    
 console.log(xbolinha)

 function criarbolinha(){
    circle(xbolinha, ybolinha, diametro);

 }

 function movimentarbolinha(){
    xbolinha += vxbolinha;


 }
 function bateraltura(){
    ybolinha += vybolinha
    if (ybolinha + raio > height || ybolinha - raio < 0 ){
        vybolinha *= -1;
    }


}

function baterlargura(){

    if (xbolinha + raio > width || xbolinha - raio < 0) {
        vxbolinha *= -1;
     }
 
   

}
}

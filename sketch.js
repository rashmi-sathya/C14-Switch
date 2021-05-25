let greeting, num1, score;

function setup() {
  
  createCanvas(400, 200);
  background(178,255,102);
  
 num1 = createInput();
 num1.position(5, 60);
  greeting = createElement('h5', 'Enter number 1:');
  greeting.position(5, 20);
  
 
  textAlign(CENTER);
  textSize(50);
}

function draw() {
  
 score= num1.value();
 
  
  switch (true) {
      
    case(score<=100 && score>=90):
      console.log("A");
      break;
      
     case(score<=89 && score>=80):
      console.log("B");
      break;
     case(score<=79 && score>=70):
      console.log("c");
      break;
       case(score<=69 && score>=60):
      console.log("D");
      break;
       case(score<=59 && score>=0):
      console.log("F");
      break;
    default:
      console.log("INVALID SCORE."); 
  }
}



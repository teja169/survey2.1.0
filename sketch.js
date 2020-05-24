
var peopleCount = 0;
var database;

function setup() {
    canvas = createCanvas(1400,800);
    database = firebase.database();
    }

    
function draw(){
    background(2, 2, 65);
    form = new Form();
    form.display();
    user = new User();

}
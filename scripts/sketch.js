
function setup() {

//////////////////////////////////////////////////////
// NAME SUFFLE
/////////////////////////////////////////////////////

//SELECT HTML LETTERS AS A (P5) ARRAY
var name = selectAll('h1');
console.log(name);

//RANDOMLY SHUFFLE LETTERS IN THE ARRAY 
//(FISHER-YATES METHOD. THANKS TO www.kirupa.com/html5/shuffling_array_js.htm)
	Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];
         
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
};

name.shuffle();

//CHANGE CSS VISIBILITY PROPERTY BY 
//LOOPING THRU RANDOMIZED ARRAY (WITH TIMEOUT)

var m = 0;
function nameLoop() {
	setTimeout(function() {
		name[m].style('visibility','visible');
		console.log(name[m]);
	m++;
	console.log (m);
	if (m < name.length) {
		nameLoop();}
	}, 250);
}
nameLoop();
}

function openPage(){
	 window.open("assets/respondr/index.html")
}

var vid1 = document.getElementById("OpenVid1");
vid1.preload = "auto";
var vid2 = document.getElementById("OpenVid2");
vid2.preload = "auto";
var vid3 = document.getElementById("OpenVid3");
vid3.preload = "auto";
var vid4 = document.getElementById("OpenVid4");
vid4.preload = "auto";

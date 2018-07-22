
$(document).ready(function () {
    console.log("I loaded!");
});

$('#carouselHomePage').carousel({
    pause: true,
    interval: false
});

// Better to set the display property of the element in the CSS sheet initially to none; also make sure to set the position property of the navigation bar to fixed, and set the top position to 0. This will remove the navbar from the normal flow of the document. You can ensure it doesnt overlap with the content by setting the padding-top property of the body to the height px value of the bar. 
// $("nav").css("display", "none");


// Define Variables
var gearbutton = "<button id='gearbutton' type='button' class='btn btn-outline-light'>Get gear</button>";
var streetbutton = "<button id='streetbutton' type='button' class='btn btn-outline-light'>Find streets</button>";
var trafficbutton = "<button id='trafficbutton' type='button' class='btn btn-outline-light'>Ride in traffic</button>";

// Define Functions
function addgearbutton() {
    $("#gearnav").html(gearbutton);
    $("#gearnav").slideDown("slow");
}

function addstreetbutton() {
    $("#streetnav").html(streetbutton);
    $("#streetnav").slideDown("slow");
}

function addtrafficbutton() {
    $("#trafficnav").html(trafficbutton);
    $("#trafficnav").slideDown("slow");
}

function removegearbutton() {
    $("#gearnav").slideUp("slow");
    $("#gearnav").empty();
}

function removestreetbutton() {
    $("#streetnav").slideUp("slow");
    $("#streetnav").empty();
}

function removetrafficbutton() {
    $("#trafficnav").slideUp("slow");
    $("#trafficnav").empty();
}


// Define Event Handlers
$(document).ready(function () {
    console.log("jquery.js ready...");
    
    $("#gearcard").mouseenter(function () {
        addgearbutton();
    });
    
    $("#streetcard").mouseenter(function () {
        addstreetbutton();
    });
    
    $("#trafficcard").mouseenter(function () {
        addtrafficbutton();
    });
    
    $("#gearcard").mouseleave(function () {
        removegearbutton();
    });
    
    $("#streetcard").mouseleave(function () {
        removestreetbutton();
    });
    
    $("#trafficcard").mouseleave(function () {
        removetrafficbutton();
    });
});
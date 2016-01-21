/* global $ */
// // /* 
// // A $( document ).ready() block.
// $( document ).ready(function() {
//     console.log( "ready!" );
// // });

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    // $( "button" ).on( "click", function() {
    //    console.log("this button has been pressed");
    // });
    
    $( "button" ).click(function() {
       $( ".kylobox" ).toggle( "bounce", { times: 3 }, "slow" );
       console.log("this button has been pressed");
    });
});
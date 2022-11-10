$(document).ready(function(){
    $("#hide").click(function(){
    $("section div").hide("slow");
    });
    $("#show").click(function(){
    $("section div").show(1000);
    });
    });
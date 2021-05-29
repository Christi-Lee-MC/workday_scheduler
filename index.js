var currentDay=document.getElementById("currentDay")


$(".saveBtn").click(function(){
var textValue=$(this).siblings(".description").val();
var id=$(this).parent().attr("id");
console.log(textValue)
console.log(id)
localStorage.setItem(id,textValue)
})

function getStorage(){
    $(".time-block").each(function(){
        var id=$(this).attr("id");
        var storedValue=localStorage.getItem(id);
        $(this).find($(".description")).val(storedValue)
    })
}

// use moment to insert current date at top of the page

function currentDay(){
    $(".currentDay").each(function(){
        const moment = require('moment');
        const today= moment();
    $(this).find($(".currentDay")).val(today.format());
    });
}

// ?
moment().format('MMMM Do YYYY, h:mm:ss a');
getStorage();
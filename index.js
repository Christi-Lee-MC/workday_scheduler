
$(".saveBtn").click(function(){
var textValue=$(this).siblings(".description").val();
var id=$(this).parent().attr("id");
console.log(textValue)
console.log(id)
localStorage.setItem(id,textValue)
})

function getStorage(){
    var currentHour = moment().get('hour');
    $(".time-block").each(function(){
        var id=$(this).attr("id");
        var storedValue=localStorage.getItem(id);
        $(this).find($(".description")).val(storedValue);
        if (id < currentHour) {
            $(this).addClass("past");
        } else if (id > currentHour) {
            $(this).addClass("future");
        }else {
            $(this).addClass("present");
        }
    })
}
// use moment to insert current date at top of the page

function currentDay(){
   var todayDate=moment().format("[Today is] dddd, MMMM Do YYYY,"); 
   $("#currentDay").text(todayDate)
}
currentDay();


getStorage();
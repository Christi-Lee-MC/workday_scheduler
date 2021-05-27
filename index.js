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
getStorage();
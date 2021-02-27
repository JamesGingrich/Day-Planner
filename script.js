var hour = moment().hour()
var index
var textArea

//Function correlates with the time rows using the momnet.js file and
// and then displays in color whether the times displayed are in
// future, past, or present
$( ".col-10" ).each(function(){
    var elId = Number($(this).attr("id"))

    if (elId < hour) {
        $(this).attr("class", "col-10 past")
    }
        else if (elId === hour) {
            $(this).attr("class", "col-10 present")
    }
        else {
            $(this).attr("class", "col-10 future")
    }

    $(this).children("textarea").val(localStorage.getItem($(this).attr("id")))
})

//function allows the user to click any save button then takes that
//value of the corresponding text and adds it to local
//storage

$(".saveBtn").click(function(){
    index = $(this).siblings("div.col-10").attr("id")
    textArea = $(this).siblings("div.col-10").children("textarea").val()
    localStorage.setItem(index, textArea)
})
 

//Displays the date and time at the top of the application
$("#currentDay").text(moment())
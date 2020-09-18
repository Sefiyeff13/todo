function todoList() {
   $("#enter").on("keyup" , function (e) {
        if (e.keyCode == 13 && $("#enter").val() != "") {
            let li = $("<li class='list'></li>").text($("#enter").val())
            $("#listul").append(li)
            $(".list").css("padding-bottom" , "1rem")
            $("#enter").val() == ""
            let icon = $("<a href=''><i class='far fa-minus-square'></i></a>")
            icon.css({"color" : "black" , "float" : "right"})
            $("#enter").val("")
            li.append(icon)
            icon.click(function (e) {
                e.preventDefault()
                $(this).parent().remove()
            })
        }
   })
}

todoList()
var input = document.getElementById("input");
    var button = document.querySelector("button")
    var list = document.querySelector("ol")
    var output = " "
    
    button.addEventListener("click", todo)
        function todo() {
            var newlist = document.createElement("li")
            var newtext =  document.createElement("span")
            var newbutton = document.createElement("button")
            output = input.value;
            newlist.appendChild(newtext);
            newtext.textContent = output;
            
        
            newlist.appendChild(newbutton);
            newbutton.textContent = "delete";
            list.appendChild(newlist);

            newbutton.onclick = function (event) {
                list.removeChild(newlist);

                
            }

        }

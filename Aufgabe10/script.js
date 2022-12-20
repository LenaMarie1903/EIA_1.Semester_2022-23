var Aufgabe10;
(function (Aufgabe10) {
    let ToDOListe = [];
    /*Neu*/
    // ToDOListe({})
    //for(let index:number=0; index<ToDOListe.length; index++)
    let counter = 0;
    /* 0ld */
    function create_todo() {
        const wrapper = document.querySelector(".wrapper");
        const newDiv = document.createElement("div");
        newDiv.className = "myClass";
        const newTrash = document.createElement("i");
        let addp = document.querySelector("input");
        if (addp.value != "") {
            const newP = document.createElement("p");
            newP.innerHTML = addp.value;
            newDiv.appendChild(newP);
            newTrash.className = "fa fa-trash-alt";
            const newCheck = document.createElement("span");
            newCheck.innerHTML = ' <input type="checkbox"> ';
            newDiv.appendChild(newCheck);
            newDiv.appendChild(newTrash);
            wrapper.appendChild(newDiv);
        }
        else {
            alert('please add a task');
            return;
        }
        /*const newTrash= document.createElement("i")  */
        /* newTrash.className="fa fa-trash-alt"*/
        /*const newCheck = document.createElement ("span");
        newCheck.innerHTML=' <input type="checkbox"> '

        newDiv.appendChild(newCheck);
        newDiv.appendChild(newTrash);
      
        wrapper.appendChild(newDiv);*/
        newTrash.addEventListener("click", function () {
            wrapper.removeChild(newDiv);
            counter--;
            document.querySelector('#total').innerHTML = String(counter);
        });
        counter++;
        document.querySelector('#total').innerHTML = String(counter);
    }
    document.querySelector(".add").addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            create_todo();
            /*counter++;
            document.querySelector('#total').innerHTML = String(counter)*/
        }
    });
    /*let remove = document.querySelector("#trash");*/
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=script.js.map
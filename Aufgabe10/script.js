var Aufgabe10;
(function (Aufgabe10) {
    let ToDOListe = [];
    /*Neu*/
    /* ToDOListe({})*/
    //for(let index:number=0; index<ToDOListe.length; index++)
    /* 0ld */
    function create_todo() {
        const wrapper = document.querySelector(".wrapper");
        const newDiv = document.createElement("div");
        newDiv.className = "myClass";
        for (let index = 0; index < ToDOListe.length; index++) {
            let addp = document.querySelector("input");
            const newP;
            if (addp.value != "") {
                newP = document.createElement("p");
                newP.innerHTML = addp.value;
                newDiv.appendChild(newP);
            }
            const newTrash = document.createElement("i");
            newTrash.className = "fa fa-trash-alt";
            const newCheck = document.createElement("span");
            newCheck.innerHTML = ' <input type="checkbox"> ';
            newDiv.appendChild(newCheck);
            newDiv.appendChild(newTrash);
            wrapper.appendChild(newDiv);
        }
        ToDOListe.push(newCheck, newP, newTrash);
    } /*}*/
    function delete_todo() {
        ToDOListe.splice(index, 1);
    }
    newDiv.quaeryselectore;
    document.querySelector(".add").addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            create_todo();
        }
    });
    /*let remove = document.querySelector("#trash");*/
    document.querySelector("#trash").addEventListener('click', function () {
        wrapper.removeChild('newDiv');
        /*  remove.classList.add('hidden'); */
    });
    let Todo_total = 100000;
    for (let index = 0; index <= Todo_total; index++) {
        console.log("Hallo" + index);
    }
    ;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=script.js.map
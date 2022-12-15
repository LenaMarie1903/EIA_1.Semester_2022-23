var Aufgabe10;
(function (Aufgabe10) {
    function create_todo() {
        const wrapper = document.querySelector(".wrapper");
        const newDiv = document.createElement("div");
        newDiv.className = "myClass";
        console.log('Hallo');
        let addp = document.querySelector(".add");
        if (addp.value != "") {
            const newP = document.createElement("p");
        }
        newP.innerHTML = addp.value;
        console.log(addp);
        const newTrash = document.createElement("i");
        newTrash.className = "fa-regular fa-trash-can";
        const newCheck = document.createElement("span");
        newCheck.innerHTML = ' <input type="checkbox"> ';
        newDiv.appendChild(newCheck);
        newDiv.appendChild(newTrash);
        newDiv.appendChild(newP);
        wrapper.appendChild(newDiv);
        console.log(wrapper);
        console.log(newDiv, newCheck, newP);
    }
    document.querySelector(".add").addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            create_todo();
        }
    });
    document.querySelector("#trash").addEventListener('click', function () {
    });
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=script.js.map
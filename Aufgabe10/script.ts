namespace Aufgabe10 {



    interface ToDO {
        task: string;
        trashtone: string;
        check: string;
    }

    function create_todo() {
        const wrapper: HTMLElement= <HTMLElement> document.querySelector(".wrapper") ;
        const newDiv= document.createElement ("div");
        newDiv.className= "myClass"
      console.log('Hallo')
        
       let addp : HTMLInputElement=  document.querySelector(".add");
       if (addp.value != "")
       {const newP= document.createElement ("p")}
       newP.innerHTML= addp.value
        console.log(addp)
        const newTrash= document.createElement("i")
        newTrash.className="fa-regular fa-trash-can"
        

        const newCheck = document.createElement ("span");
        newCheck.innerHTML=' <input type="checkbox"> '

        newDiv.appendChild(newCheck);
        newDiv.appendChild(newTrash);
        newDiv.appendChild(newP);
        
        wrapper.appendChild(newDiv);
      console.log(wrapper)
        console.log(newDiv,newCheck,newP)

    }

    


    document.querySelector(".add").addEventListener('keypress', function (e: KeyboardEvent) {
        if (e.key === 'Enter') {
            create_todo()
           
    
        }

})





    document.querySelector("#trash").addEventListener('click', function () {

    })














}
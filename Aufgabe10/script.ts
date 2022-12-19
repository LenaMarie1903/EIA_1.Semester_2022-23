namespace Aufgabe10 {



    interface ToDO {
        task: string;
        trashtone: string;
        check: string;
    }
    let ToDOListe : ToDO [] = [];

   /*Neu*/
   // ToDOListe({})
    
    //for(let index:number=0; index<ToDOListe.length; index++)

   

let counter = 0; 
    /* 0ld */  

    function create_todo() {   /*ToDOListe.push({task:addp.value.toString; trashtone:String; newCheck: String;})*/
        const wrapper: HTMLElement= <HTMLElement> document.querySelector(".wrapper") ;
        const newDiv= document.createElement ("div");
        newDiv.className= "myClass"
        
       let addp : HTMLInputElement=  document.querySelector("input");
       if (addp.value != "")
      {const newP= document.createElement ("p")
       newP.innerHTML= addp.value 
       newDiv.appendChild(newP);
    }
        
        
        const newTrash= document.createElement("i")
        newTrash.className="fa fa-trash-alt"
        

        const newCheck = document.createElement ("span");
        newCheck.innerHTML=' <input type="checkbox"> '

        newDiv.appendChild(newCheck);
        newDiv.appendChild(newTrash);
      
        
        wrapper.appendChild(newDiv);

        
      
     newTrash.addEventListener("click", function(){
        wrapper.removeChild(newDiv);
        counter--;
        document.querySelector('#total').innerHTML = String(counter)
     })
    } 



    document.querySelector(".add").addEventListener('keypress', function (e: KeyboardEvent) {
        if (e.key === 'Enter') {
            create_todo();
            counter++; 
            document.querySelector('#total').innerHTML = String(counter)
           
    
        }

})


/*let remove = document.querySelector("#trash");*/


    

   














}
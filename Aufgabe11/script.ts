namespace Aufgabe11 {



    interface ToDO {
        task: string;
        /*trashtone: boolean;*/
        check: boolean;
    }
    let ToDOListe: ToDO[] = [];

    /*Neu*/
    // ToDOListe({})



    let addp
    addp = document.querySelector("input");

    /*Speichern der erstellten Elemente*/
    function array_pushen() {
        if (addp.value != ""){

            ToDOListe.unshift({ task: addp.value, check: false });
            
            counter++;
            create_todo();
        }
        else {
            alert('please add a task');
            return;
        }

    }

    let counter = 0;
    let counterdone=0; 
    let counterundone 

    function create_todo() {   /*ToDOListe.push({task:addp.value.toString; trashtone:String; newCheck: String;})*/
        const wrapper: HTMLElement = <HTMLElement>document.querySelector(".wrapper");
        wrapper.innerHTML = ""

counterdone= 0

        for (let index: number = 0; index < ToDOListe.length; index++) {

            const newDiv = document.createElement("div");
            newDiv.className = "myClass"

            const newTrash = document.createElement("i");


             
                const newP = document.createElement("p");

                newP.innerHTML = ToDOListe[index].task;
                newDiv.appendChild(newP);

                newTrash.className = "fa fa-trash-alt";

                const newCheck = document.createElement("i");
                if (ToDOListe[index].check == true) {
                    newCheck.className = "far fa-check-circle";
                    counterdone++
                }
                else {
                    newCheck.className = "far fa-circle";
                    //counterTrue++
                }
                //newCheck.innerHTML= ToDOListe[index].check

                newDiv.appendChild(newCheck);
                newDiv.appendChild(newTrash);

                wrapper.appendChild(newDiv);

                newCheck.addEventListener('click', function () {
                    ToDOListe[index].check = !ToDOListe[index].check;
                    create_todo();
                }

                )
            
            


            /*const newTrash= document.createElement("i")  */
            /* newTrash.className="fa fa-trash-alt"*/


            /*const newCheck = document.createElement ("span");
            newCheck.innerHTML=' <input type="checkbox"> '
    
            newDiv.appendChild(newCheck);
            newDiv.appendChild(newTrash);
          
            wrapper.appendChild(newDiv);*/



            newTrash.addEventListener("click", function () {
                counter--;
                document.querySelector('#total').innerHTML = String(counter)
                ToDOListe.splice(index, 1);
                create_todo()
            })



            
            document.querySelector('#total').innerHTML = String(counter+ 'total' + counterdone + 'done')
        }
    }



    document.querySelector(".add").addEventListener('keypress', function (e: KeyboardEvent) {
        if (e.key === 'Enter') {
            array_pushen();
            /*counter++; 
            document.querySelector('#total').innerHTML = String(counter)*/


        }

    })


    /*let remove = document.querySelector("#trash");*/



















}
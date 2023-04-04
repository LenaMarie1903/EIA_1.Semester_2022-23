var L03_FormElements;
(function (L03_FormElements) {
    window.addEventListener("load", init); // Wenn die Seite aufgerufe wird, wird die Funktion init aufgerufen
    function init(_event) {
        console.log("Init"); // In Console wird string Init augegeben
        let fieldsets = document.querySelectorAll("fieldset"); // Eine Variable wird deklariert und wird gesagt du bist wie der Tag fieldset durch aueryselectorAll wird alles aus dem Tag mitgegben. // vom Typ Fieldset
        // Install listeners on fieldsets
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i]; // In fieldset wird  zugewisen du bist fieldets an stelle i (es wird von 0 hochgezählt)
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }
    function handleChange(_event) {
        let target = _event.target; //
        console.log(); //
        if (_event.type == "change") //
            console.warn("Change: " + target.name + " = " + target.value, _event); //
        else
            console.log("Input: " + target.name + " = " + target.value, _event); //
        //Handling checkbox
        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked);
        // Slider response
        if (target.name == "Slider") { //Slider ist der Name, den ich im HTML-Dokument verwendet habe
            let progress = document.getElementsByTagName("progress")[0]; //Variable wird deklariert, die den Wert unseres Tags haben.
            progress.value = parseFloat(target.value); //Der Wert des Prozesses wird dem Zielweet zugewisen und durch parseFloat in Zahlen umgewandelt.
        }
        // Meter response
        if (target.name == "Stepper") {
            let meter = document.querySelector("meter");
            meter.value = parseFloat(target.value);
        }
        // Color response
        if (target.name == "Color") {
            let ouput = document.querySelector("output");
            ouput.value = target.value;
        }
    }
})(L03_FormElements || (L03_FormElements = {}));
//# sourceMappingURL=FormElements.js.map
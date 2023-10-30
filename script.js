function calculate() {

    const prvni = parseInt(document.getElementById("first").value)
    const druhy = parseInt(document.getElementById("second").value)
    const treti = parseInt(document.getElementById("third").value)

    let result;

    if (treti == ""){
        result = Math.sqrt((prvni * prvni) + (druhy * druhy));
    } else if (druhy == ""){
        result = Math.sqrt((treti * treti) - (prvni * prvni));
    } else if (prvni == ""){
        result = Math.sqrt((treti * treti) - (druhy * druhy));
    } else {
        document.getElementById("final").innerHTML = "nejde"
    }

    console.log(prvni)
    console.log(druhy)
    console.log(treti)

    document.getElementById("final").innerHTML = result
}

function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    
    var month_diff = Date.now() - dob.getTime();
    
    var age_dt = new Date(month_diff); 
      
    var year = age_dt.getUTCFullYear();
    
    var age = Math.abs(year - 1970);

    if (age >= 18 || userinput >= 18 && userinput < 100) {
        result = "prošel jsi"
    } else {
        result = "neprošel jsi"
    }


    return document.getElementById("result").innerHTML = result;
    }
}
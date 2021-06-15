function requestData() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "https://milkii2019.github.io/hello/abc.json");
    xhr.onload = () => {
        console.log("working quest");
        try {
            console.log("working onload");
            const json = JSON.parse(xhr.responseText);
            console.log(json);
            console.log(json.myCollegeDegrees.length);//3
            populateData(json);
            
        } catch (e) {
            console.warn("could not load");
        }
    };
    xhr.send();
    console.log("from sending");
}

function populateData(json) {
    document.getElementById("School").innerHTML = json.myCollegeDegrees[0].Degree.School;
    document.getElementById("Major").innerHTML = json.myCollegeDegrees[0].Degree.Major;
    document.getElementById("Type").innerHTML = json.myCollegeDegrees[0].Degree.Type;
    document.getElementById("Year").innerHTML = json.myCollegeDegrees[0].Degree.Yearconferred;

    document.getElementById("School1").innerHTML = json.myCollegeDegrees[1].Degree.School;
    document.getElementById("Major1").innerHTML = json.myCollegeDegrees[1].Degree.Major;
    document.getElementById("Type1").innerHTML = json.myCollegeDegrees[1].Degree.Type;
    document.getElementById("Year1").innerHTML = json.myCollegeDegrees[1].Degree.Yearconferred;

    document.getElementById("School2").innerHTML = json.myCollegeDegrees[2].Degree.School;
    document.getElementById("Major2").innerHTML = json.myCollegeDegrees[2].Degree.Major;
    document.getElementById("Type2").innerHTML = json.myCollegeDegrees[2].Degree.Type;
    document.getElementById("Year2").innerHTML = json.myCollegeDegrees[2].Degree.Yearconferred;
    
}
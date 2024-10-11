function load() {
    var x = new XMLHttpRequest();

    x.onreadystatechange = function() {
        if (x.readyState == 4) { // Request is complete
            if (x.status == 200) { // HTTP status is OK
                var response = JSON.parse(x.responseText);
                document.getElementById("quote").innerHTML = response.content + " ~ " + response.author;
            } else { // HTTP status is not OK
                document.getElementById("quote").innerHTML = "Error! Please Try Again Later";
            }
        }
    };

    x.onerror = function() { // Network errors or other issues
        document.getElementById("quote").innerHTML = "Error! Connection issue";
    };

    x.open("GET", "http://api.quotable.io/random", true);
    x.send();
}

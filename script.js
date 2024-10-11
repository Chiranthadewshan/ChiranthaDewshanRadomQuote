function load(){
    var x = new XMLHttpRequest();

    x.onreadystatechange = function(){
        if(x.status == 200 ){
           var response= JSON.parse(x.responseText);
            document.getElementById("quote").innerHTML = response.content +" ~ " + response.author;
        }else if(x.readyState == 4){
            document.getElementById("quote").innerHTML = "Error! , Please Try Again Later";
        }
    }
    x.onerror = function(){
        document.getElementById("quote").innerHTML = "Error! , Connection! issue";
    }

    x.open("GET","http://api.quotable.io/random",true);
    x.send();
}

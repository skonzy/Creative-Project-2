window.onload = function () {
    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();
        console.log("value");
        const url = "https://api.aakhilv.me/facts/json";
        fetch(url)
            .then(function (response) {
                console.log(response);
                return response.json();
            }).catch(function(error) {  
                console.log('Request failed', error)  
            }).then(function (json) {
                console.log(json)
                console.log(json.text);

                const node = document.createElement("p");
                const textnode = document.createTextNode(json.text);
                node.appendChild(textnode);
                document.getElementById("fact-text").appendChild(node);   
            });
    }); 
}

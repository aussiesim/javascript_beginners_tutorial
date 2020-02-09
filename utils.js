function convertListItemsToLinks() {
    var searchesDiv = document.getElementById("searches");
    if (searchesDiv) {
        var list = searchesDiv.getElementsByTagName("li");
        for (var i = 0; i < list.length; i++) {
            list[i].innerHTML = "<a href='http://google.com/search?q=" + encodeURI(list[i].innerHTML) + "' >" + list[i].innerHTML + "</a>";
        }
    }
}

window.addEventListener("load", convertListItemsToLinks);
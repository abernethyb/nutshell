
// ref w3 include html 
//inserts html in off the active user boolean in main.js
const includeHTML = (container, htmlPage, htmlsource ) => {
    if (htmlsource === "file") {
        container.setAttribute("w3-include-html", htmlPage)
        const file = htmlPage
        if (file) {
            const xhttp = new XMLHttpRequest ();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {container.innerHTML =this.responseText;}
                    if (this.status == 404) {container.innerHTML = "Page not found";}
                container.removeAttribute("w3-include-html");
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    } else {
        container.innerHTML = htmlPage
    }
}

export default includeHTML;
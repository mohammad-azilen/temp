<![CDATA[
document.addEventListener('DOMContentLoaded', function () {
    let elements = document.getElementsByClassName('invoice-entry');
    for (let i = 0; i < elements.length; i++) {
        if(elements[i].getElementsByTagName("td")[0].innerHTML == "BuzzBox Calls_Other") {
            elements[i].getElementsByTagName("td")[2].innerHTML = "N/A";
        }
    }
}, false);
]]>

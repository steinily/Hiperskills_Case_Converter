function uppercase(){
    let text=document.getElementById('inputtext').value;
    text=text.toUpperCase();
    document.getElementById('inputtext').value = text;

}


function lowercase(){
    let text=document.getElementById('inputtext').value;
    text=text.toLowerCase();
    document.getElementById('inputtext').value = text;
}

function propercase(){
    let text=document.getElementById('inputtext').value;
    let newText = text.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
    document.getElementById('inputtext').value = newText;
}

function sentencecase(){
    let text=document.getElementById('inputtext').value;
    text=text.toLowerCase();
    let n=text.split(".");
    let vfinal="";
    for(i=0;i<n.length;i++) {
        var spaceput = ""
        var spaceCount = n[i].replace(/^(\s*).*$/, "$1").length;
        n[i] = n[i].replace(/^\s+/, "");
        var newstring = n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
        for (j = 0; j < spaceCount; j++)
            spaceput = spaceput + " ";
        vfinal = vfinal + spaceput + newstring + ".";
    }
        vfinal=vfinal.substring(0, vfinal.length - 1);
    document.getElementById('inputtext').value = vfinal;

}
function download(filename) {
    let text=document.getElementById('inputtext').value;
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

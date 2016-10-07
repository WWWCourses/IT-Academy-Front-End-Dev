function themeSwitcher(themeName){
    alert("themeSwitcher ON");
    document.getElementById('theme').setAttribute('href','/IT-Academy-Front-End-Dev/lib/reveal.js/css/theme/'+themeName+'.css');
}
function  PrettyPreCode(){
    var codeNodes = document.querySelectorAll('pre>code');

    for (var i = 0; i < codeNodes.length; i++)
    {
        var content = codeNodes[i].innerHTML;
        // console.log("content:", content);

        var lines = content.split('\n');
        // console.log("lines:", lines);

        if ( !lines[1] ){
            continue;
        }
        var tab_index = lines[1].search(/\S/);
        // console.log("tab_index", tab_index);

        var contentNew = '';
        for ( var j=0; j<lines.length; j++ ){
            lines[j] = lines[j].substring(tab_index-1);
            contentNew += lines[j]+'\n';
        }

        codeNodes[i].innerHTML = contentNew;
        codeNodes[i].style.overflow="auto";
    }
}

PrettyPreCode();


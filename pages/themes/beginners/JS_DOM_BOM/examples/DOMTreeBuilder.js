var nodeTree = getNodeTree(document.documentElement);
console.log(nodeTree);

function getNodeTree(node) {
    if (node.hasChildNodes()) {
        var children = [];
        for (let i = 0; i < node.childNodes.length; i++) {
            children.push(getNodeTree(node.childNodes[i]));
            console.log("child arr: ", children );
        }

        return {
            nodeName: node.nodeName,
            parentName: node.parentNode.nodeName,
            children: children,
            content: node.innerText || "",
        };
    }

    return false;
}

function showTree(node) {
	if (!node) return "";

    var result = "";

    if (node.children.length > 0) {
        result += "<ul><li>Node: " + node.nodeName + "</li>";
        result += "<li>Parent: " + node.parentName + "</li>";
        result += "<li>Content: " + node.content + "</li>";
        for (let i = 0; i < node.children.length; i++){
            // console.log("node: ", node, "i=", i);
            // console.log("node.children[i]:", node.children[i]);
            if (node.children[i]){
                result += "<li> Child " + i + ": " + showTree(node.children[i]) + "</li>";
            }
        }

        result += "</ul>";
    }

    return result;
}


document.getElementById("show_tree").addEventListener("click", function() {
    document.getElementById("result").innerHTML = showTree(nodeTree);
});
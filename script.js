	
var renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
    var link = marked.Renderer.prototype.link.call(this, href, title, text);
    return link.replace("<a","<a target='_blank' ");
};
marked.setOptions({
    renderer: renderer,
	breaks:true, 
//	gfm:true, 
	xhtml:true	
});

var input =  document.getElementById("editor");
var output = document.getElementById("preview");

function upDatePreview() {
	//output.innerHTML=marked(input.value, {breaks:true, gfm:true, xhtml:true});
	output.innerHTML=marked(input.value);

}

window.onload = function() {
//	input.value = dummyText;
	upDatePreview();
};


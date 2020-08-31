var imagesFiles = [
	'agriculture-arable-clouds-countryside.png',
	'amazing-beautiful-beauty-blue.png',
	'larch-conifer-cone-branch-tree-40896.png',
	'lion-safari-afika-landscape-40756.png',
	'meadow-grass-palm-tree-forest-plenty-of-natural-light-47334.png',
	'pexels-photo-114735.png',
	'pexels-photo-346529.png',
	'wolf-torque-wolf-moon-cloud-45242.png',
]; 
var mainImagePath = 'images/thumbs-960x600/';
var thumbsPath = 'images/thumbs-x150/';
var thumbsWrapper = document.querySelector(".thumbsWrapper");
var mainImage = document.querySelector('.mainImage img');

var thumbNodes = createAllThumbs(thumbsPath, imagesFiles, thumbsWrapper);

function createAllThumbs(thumbsPath, imagesFiles, thumbsWrapper){
	var thumbNodes = [];

	imagesFiles.forEach(imgName=>{
		thumbNodes.push(createImageNode(thumbsPath+imgName,thumbsWrapper));		
	})

	return thumbNodes;
}

function createImageNode(src, outputNode){
	var imgNode = document.createElement('img');

	imgNode.src = src;
	imgNode.addEventListener('click', previewImage);

	outputNode.appendChild(imgNode);

	return imgNode;
}	

function previewImage(e){
	mainImage.src = e.target.src;
	// start animation:
	mainImage.classList.add('fadeIn');

	//reset opacity after 2s
	setTimeout(function(){
		mainImage.classList.remove('fadeIn');
	}, 600);

	// clear other
	thumbNodes.forEach(node=>node.classList.remove('selected'));

	// shift array:
	thumbNodes.push(thumbNodes.shift());

	console.log(thumbNodes);
	// style as .selected
	e.target.classList.add("selected");
}



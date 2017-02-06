var filename='http://themes.3rdwavemedia.com/demo/orbit/demo-only/demo-ads.css?' + new Date().getTime();		
var fileref=document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", filename);
document.getElementsByTagName("head")[0].appendChild(fileref);

var demoad = document.createElement('div');
demoad.id = 'ads-container';
demoad.innerHTML = '<span id="ads-close"><i class="fa fa-close"></i></span>';
document.getElementsByTagName('body')[0].appendChild(demoad);

document.getElementById('ads-close').addEventListener('click',function(e){
	demoad.style.display = 'none';
	e.preventDefault();
});

var adscript = document.createElement('script');
adscript.type = 'text/javascript';
adscript.async = true;
adscript.id = '_carbonads_js';
adscript.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=themes3rdwavemediacom';
demoad.appendChild(adscript);

var adChecked = false;
var attempts = 5;
var cntAttempts = 0;
var adInterval;

function checkAd() {
	if (adChecked || cntAttempts >= attempts) {
		clearInterval(adInterval);
		return;
	}

	cntAttempts++;

	var carbonImg = document.querySelector('.carbon-img');

	if (!carbonImg) return;

	var adImgHeight = carbonImg.offsetHeight;

	if (adImgHeight >= 30) {
		_gaq.push(['_trackEvent', 'Developer Theme Demo Ad', 'Carbon Ad VISIBLE','Carbon Ad']);
		
		adChecked = true;
	} 
}

if(window._gaq) {
	_gaq.push(['_trackEvent', 'Developer Theme Demo Ad', 'Carbon ad included', '1']);

	adInterval = setInterval(checkAd, 3000);
}
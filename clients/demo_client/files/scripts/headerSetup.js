// CLIENT SPECIFIC CUSTOMIZATION
const imLink = "client_image_link"; // Header Logo Image Link
const accentColor = "green";		// Color used for buttons, headings, etc.

// CODE
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const loader = document.getElementById("loader");
const titleBars = document.getElementsByClassName('titleBar');

function runHead(){
	loader.innerHTML = "<div id='loaderLogo'>Please Wait...</div>";
	// Set color of title bars to accent color
		header.style.backgroundColor = accentColor;
		for(i = 0; i < titleBars.length; i++) {
	    cols[i].style.backgroundColor = accentColor;
	  	}
	header.innerHTML = "<img src='"+imLink+"'>";
	footer.innerHTML = "<p class='disclaimer'>Powered by Aztech Admit <em>Secure Ticketing Services</em></p> <p><a href=''>Terms of Service</a> | <a href=''>Cookie Settings</a> | <a href=''>Security</a> | <a href=''>Report Issue</a>";
}

function finishLoad(delay){
	setTimeout(function(){deleteLoader();},delay);
}
function deleteLoader(){
	loader.style.opacity = '0';
	setTimeout(function(){loader.style.display = 'none';},1000);
}

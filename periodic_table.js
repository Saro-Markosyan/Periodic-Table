// JavaScript source code


function init() {

    var temp = document.getElementById('hydrogen');
    temp.innerText = 'Hydrogen';

    var temp = document.getElementById('helium');
    temp.innerText = 'Helium';

    var temp = document.getElementById('lawrencium');
    temp.innerText = 'Lawrencium';
    
    //btnSearch.addEventListener("click", function() {
	
	//});
}

function initSearch() {
	var search = document.getElementById('search');
	var btnSearch = document.getElementById('btnSearch');
	window.find(search.value);
}

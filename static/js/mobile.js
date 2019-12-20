var mobileSetup = function() {
    var menuAction = function(e) {
	var navList = document.getElementById('nav-list');
	
	if (navList.className == 'big-only') {
	    // if big-only is present and therefore nav is collapsed
	    navList.className = '';
	} else {
	    navList.className = 'big-only';
	}

	e.preventDefault();
    };
    document.getElementById('menu-button').addEventListener('click', menuAction, false);
};
mobileSetup()

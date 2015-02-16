/*LightForum main script V0.0.1dev*/
say("LightForum V0.0.1 Developer Release");

/*Set the page title according to the one provided*/
getData('src/data/lf-user-global.json', function(r) {
	modifyElement("usr-title", r.index[0].pgtitle);
});

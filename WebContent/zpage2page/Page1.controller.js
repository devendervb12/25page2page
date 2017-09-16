sap.ui.controller("zpage2page.Page1", {

	gotoPage2 : function(){
		/*debugger;
		alert('hello controller');*/
		//this.getView() //Page1.view.xml
		
		var oApp = this.getView().getParent();
		oApp.to("idPage12");
	}

});
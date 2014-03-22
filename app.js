Ext.application({
    name: "bookish",
requires: ['bookish.view.Main','bookish.view.Info','bookish.view.BooksListContainer','bookish.view.BooksList','Ext.MessageBox'],
    models: ["Book"],
    stores: ["Books"],
    controllers: ["Books"],
    views: ["Info","BooksList", "BooksListContainer", "BookEditor"],  

    launch: function () {
		Ext.fly('appLoadingIndicator').destroy();

        var mainView  = {
			xtype:"main"
			};

		var infoView = {
            xtype: "info"
        };

        var booksListContainer = {
            xtype: "bookslistcontainer"
        };
        var bookEditor = {
            xtype: "bookeditor"
        };

        Ext.Viewport.add([mainView,infoView,booksListContainer,bookEditor]);
    }
});


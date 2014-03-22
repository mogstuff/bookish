Ext.define("bookish.controller.Books", {

    extend: "Ext.app.Controller",
    config: {
        refs: {          
            booksListContainer: "bookslistcontainer",
             bookEditor: "bookeditor",
             mainView: "main",
        },
        
        slideLeftTransition: { type: "slide", direction: "left" },
        
        slideRightTransition: { type: "slide", direction: "right" },
        
        control: {
    booksListContainer: {      
        newBookCommand: "onNewBookCommand",
        editBookCommand: "onEditBookCommand"
    },
    bookEditor: {     
        saveBookCommand: "onSaveBookCommand",
        deleteBookCommand: "onDeleteBookCommand",
        backToHomeCommand: "onBackToHomeCommand"
    }
}
        
    },
    


    // Commands.
    onNewBookCommand: function () {
        console.log("onNewBookCommand fired in controller");        
          var now = new Date();
		  var bookId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

			var newBook = Ext.create("bookish.model.Book", {
				id: bookId,				
				title: "",
				author: "",
				synopsis: ""
				});

    this.activateBookEditor(newBook);
        
    },
    
    getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
},
    
    
    activateBookEditor: function (record) {

    var bookEditor = this.getBookEditor();
    bookEditor.setRecord(record);
      Ext.Viewport.animateActiveItem(bookEditor, this.getSlideLeftTransition());
	},
    
    
    activateBooksList: function () {
    Ext.Viewport.animateActiveItem(this.getMainView(), this.getSlideRightTransition());
},
    
    
    onEditBookCommand: function (list, record) {

        console.log("onEditBookCommand");
         this.activateBookEditor(record);

    },
    
    onDeleteBookCommand: function () {

    console.log("onDeleteBookCommand");

    var bookEditor = this.getBookEditor();
    var currentBook = bookEditor.getRecord();
    var booksStore = Ext.getStore("Books");

    booksStore.remove(currentBook);
    booksStore.sync();

    this.activateBooksList();
},
    
    onSaveBookCommand: function () {

    console.log("onSaveBookCommand");

    var bookEditor = this.getBookEditor();

    var currentBook = bookEditor.getRecord();
    var newValues = bookEditor.getValues();

    // Update the current note's fields with form values.
    currentBook.set("title", newValues.title);
    currentBook.set("author", newValues.author);
    currentBook.set("synopsis", newValues.synopsis);
    
    var booksStore = Ext.getStore("Books");

    if (null == booksStore.findRecord('id', currentBook.data.id)) {
        booksStore.add(currentBook);
    }

    booksStore.sync();

    this.activateBooksList();
},
    
    
    onBackToHomeCommand: function () {

console.log("onBackToHomeCommand");
this.activateBooksList();
},
    
    
    // Base Class functions.	
    launch: function () {
    this.callParent(arguments);
    Ext.getStore("Books").load();
    console.log("launch");
	}    
    ,
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});

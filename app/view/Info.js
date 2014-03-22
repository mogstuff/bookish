/**
 * Information about the app, Carousel Example
 * 
 */
Ext.define("bookish.view.Info", {
    extend: "Ext.Carousel",
    requires: ["Ext.Carousel"],
    alias: "widget.info",
    xtype: 'info',
    requires: [ 'Ext.TitleBar'],
    
     config:{
          layout: 'vbox',
           flex: 1,
          items: [
								 {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'About Bookish'
                },
								
								{
								xtype: 'panel',
								html: '<h2>About Bookish</h2><p>The app includes a list of recommended books that can be added to and modified. The user navigates through the different views via the icons on the bottom tab. This particular view uses the Carousel Component. Swipe left to read more.</p>'
								},
								{
								xtype: 'panel',
								html: '<h2>How the App was Built</h2><p>The app was built using the MVC approach. There is one Model, Book, that data for which is contained in a store. There is one Controller, Books which controls the interaction between the Books store and the UI. Views include, Main: the Home View which uses the Tab Panel Component, Info: This View which uses the Carousel Component, BooksListContainer: this is a wrapper for the BooksList View, which uses the DataView.List Component and the BookEditor View which uses the Form Panel Component.</p>'
								},
								{
								xtype: 'panel',
								html: '<h2>Resources Used</h2><p>I worked through the list of tutorials recommended by Prof. Dr. Klaus Quibeldey-Cirkel. I worked mainly from the <a href="http://docs.sencha.com/touch/2.3.1/#!/guide/first_app">Building Your First App</a> and the NotesApp from http://miamicoder.com/sencha-touch-tutorials/.</p>'
								}
							]
    },
    
    
    
    initialize: function () {

        this.callParent(arguments);

    }
});


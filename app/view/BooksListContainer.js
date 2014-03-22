Ext.define("bookish.view.BooksListContainer", {
    extend: "Ext.Container",
    alias: "widget.bookslistcontainer",
    xtype: 'bookslistcontainer',

    initialize: function () {

        this.callParent(arguments);

        var newButton = {
            xtype: "button",
            text: 'New',
            ui: 'action',
            handler: this.onNewButtonTap,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            title: 'Bookish',
            docked: "top",
            items: [
                { xtype: 'spacer' },
                newButton
            ]
        };
     
        
        var booksList = {
    xtype: "bookslist",
    store: Ext.getStore("Books"),
    listeners: {
        disclose: { fn: this.onBooksListDisclose, scope: this }
    }
    
    
};
        

        this.add([topToolbar, booksList]);
    },
    onNewButtonTap: function () {
        console.log("newBookCommand new button click");
        this.fireEvent("newBookCommand", this);
    },
    
    onBooksListDisclose: function (list, record, target, index, evt, options) {
    console.log("editBookCommand");
    this.fireEvent('editBookCommand', this, record);
},
    
    
    config: {
        layout: {
            type: 'fit'
        }
    }
});

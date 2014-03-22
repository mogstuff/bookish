Ext.define("bookish.view.BookEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.bookeditor",
    config:{
        scrollable:'vertical'
    },
    initialize: function () {

        this.callParent(arguments);

        var backButton = {        
              xtype: "button",
			  ui: "back",
              text: "Home",
              handler: this.onBackButtonTap,
              scope: this
        };

        var saveButton = {
            xtype: "button",
            ui: "action",
            text: "Save",
           	handler: this.onSaveButtonTap,
			scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "Edit Book",
            items: [
                backButton,
                { xtype: "spacer" },
                saveButton
            ]
        };

        var deleteButton = {
            xtype: "button",
            iconCls: "trash",
            iconMask: true,
            handler: this.onDeleteButtonTap,
            scope: this
        };

        var bottomToolbar = {
            xtype: "toolbar",
            docked: "bottom",
            items: [
                deleteButton
            ]
        };

        var bookTitleEditor = {
            xtype: 'textfield',
            name: 'title',
            label: 'Title',
            required: true
        };
        
        
         var bookAuthorEditor = {
            xtype: 'textfield',
            name: 'author',
            label: 'Author',
            required: true
        };

        var bookSynopsisEditor = {
            xtype: 'textareafield',
            name: 'synopsis',
            label: 'Synopsis'
        };

        this.add([
            topToolbar,
            { xtype: "fieldset",
                items: [bookTitleEditor, bookAuthorEditor, bookSynopsisEditor]
            },
          //  bottomToolbar
        ]);
    },

onDeleteButtonTap: function () {
    console.log("deleteBookCommand");
    this.fireEvent("deleteBookCommand", this);
},


onBackButtonTap: function () {
    console.log("backToHomeCommand");
    this.fireEvent("backToHomeCommand", this);
},

onSaveButtonTap: function () {
    console.log("saveBookCommand");
    this.fireEvent("saveBookCommand", this);
}


});

Ext.define("bookish.model.Book", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },          
            { name: 'title', type: 'string' },
            { name: 'author', type: 'string' },
            { name: 'synopsis', type: 'string' }
        ],
        validations: [
            { type: 'presence', field: 'id' },
           // { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'title', message: 'Please enter a title for this book.' }
        ]
    }
});


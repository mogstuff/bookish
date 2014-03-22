Ext.define("bookish.view.BooksList", {
    extend: "Ext.dataview.List",
    alias: "widget.bookslist",
    xtype: 'bookslist',
    
    config: {
        loadingText: "Loading Notes...",
         styleHtmlContent: true,
        emptyText: '</pre><div class="books-list-empty-text">No books found.</div><pre>',
        onItemDisclosure: true,
        itemTpl: '</pre><div class="list-item-title">{title}</div><div class="list-item-author">{author}</div><pre><div class="list-item-synopsis"><p>{synopsis}</p></div><pre>',
    }
});

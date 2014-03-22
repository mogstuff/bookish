Ext.define('bookish.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'bookish.view.Info',
        'bookish.view.BooksList',
        'bookish.view.BookEditor'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
           
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Bookish'
                },

                html: [
                    "<p>This app contains an editable list of recommended books.</br>",
					"Users can add and update books.</p>",
					"<p>You can view more information about the app by clicking the Info Tab below.</p>",
					"<p>This is my submission for Web Engineering II: Developing Mobile HTML5 Apps ",
					"Homework #4: My First Sencha Touch App in the Cloud assignment.",
					"The requirement A tab bar with at least 3 icons at the bottom has been met by placing",				
                    "the Home, Info and Books icons in the bottom tab bar.</p>",
                    "<p>The requirement: Each icon in the tab bar leads to a view with a different UI",
                    "component, such as carousel, nested list, etc has been met by 1. The Info View uses the",
                    "Carousel Component 2. The Books View uses the DataView.List Component. 3. Clicking on ",
                    "the New button or Clicking on the Arrow in each List Item sends the user to the Book Editor",
                    "View which uses the Form Panel Component.</p>",
                    "<p><img src=\"https://scontent-a-lhr.xx.fbcdn.net/hphotos-ash3/t1.0-9/p417x417/1006039_10153187029065651_872767083_n.jpg\" width=\"120\" height=\"120\"/><br/>Good luck to everyone taking the course.<br/>Mark Morgan</p>"
                ].join("")
            },
            
           {
			 title: 'Info',
            iconCls: 'info',
            xtype: 'info',   
			   },
			   
			{
			title: 'Books',
			iconCls: 'bookmarks',
			xtype: 'bookslistcontainer',	
			},   
			
			{
			title:'Add Book',
			iconCls: 'info',
			xtype: 'bookeditor',	
			},
			
        ]
    }
});

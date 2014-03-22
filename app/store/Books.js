Ext.define("bookish.store.Books", {
    extend: "Ext.data.Store",
    config: {
        model: "bookish.model.Book",
        data: [
            { title: "Bravew New World", author: "Aldous Huxley", synopsis: "Huxley's imaginatively futuristic novel, <br/>unprecedented at the time of its publication in 1932, <br/> warns of the dangers of sacrificing freedom<br/> and individuality for scientific progress and social stability." },
            { title: "I Robot", author: "Isaac Asimov", synopsis: "The three laws of Robotics:<br/> 1) A robot may not injure a human being or, through inaction, allow a human being<br/> to come to harm 2) A robot must obey orders givein to it by<br/> human beings except where such orders would conflict with the First Law. <br/>3) A robot must protect its own existence as long as such protection does not conflict<br/> with the First or Second Law." },
            { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", synopsis: "Slaughterhous-Five is one of the world's great anti-war books.<br/> Centering on the infamous<br/> fire-bombing of Dresden, Billy Pilgrim's odyssey through time reflects the mythic journey<br/> of our own fractured lives as we search for meaning in what we are afraid to know." }         
        ]
    }
});


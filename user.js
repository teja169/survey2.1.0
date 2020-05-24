class User {
    constructor() {
        this.index = null;
        this.email = null;
        this.input = null;
    }
getCount(){
    var countref=database.ref('peopleCount');
    countref.on("value",function data(){
        countref:data.val();
    })
}
    updateCount(count) {
        database.ref('/').update({
            peopleCount: count
        });
    }

    update() {
        var playerIndex = "player" + this.index;
        database.ref(playerIndex).set({
            input: this.input,
            email: this.email,
            answer: []
        });
    }
}
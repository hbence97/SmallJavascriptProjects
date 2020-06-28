class Chatroom {
    constructor(username, room) {
        this.username = username;
        this.room = room;
        this.chats = db.collection('Chat-project');
        this.unsub;
    }
    async addChat(message) {
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        await this.chats.add(chat);
        return this;
    }
    getChats(callback) {
        this.unsub = this.chats
            .where("room", "==", this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        callback(change.doc.data());
                    }
                });
            });
    }
    updateUsername(username) {
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room) {
        this.room = room;
        console.log('Room updated');
        if (this.unsub) {
            this.unsub();
        }
    }
}
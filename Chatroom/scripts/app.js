const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch((err) => console.log(err));
});

newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newUsername = newNameForm.name.value.trim();
    chatroom.updateUsername(newUsername);
    newNameForm.reset();
    updateMessage.innerText = `Your name was updated to ${newUsername}.`;
    setTimeout(() => updateMessage.innerText = '', 3000);
});

rooms.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => {chatUI.render(chat)});
    }
});

const username = localStorage.username ? localStorage.username : 'Anonymus';

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom(username, 'general');

chatroom.getChats((data) => {
    chatUI.render(data);
});
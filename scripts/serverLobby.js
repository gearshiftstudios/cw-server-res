
serverLobby = {}
serverLobby.lobby = {
        lobbyMUSIC: new Audio ("/client/sound/music/lobby.mp3"),
        socket: io(),
        login_HTML: document.getElementById('login'),
        loginScreen: document.getElementById('loginScreen'),
        loginScreen_label: document.getElementById('loginScreen-label'),
        loginScreen_usernameBar: document.getElementById('loginScreen-usernameBar'),
        loginScreen_usernameBar__text: document.getElementById('loginScreen-usernameBar--text'),
        loginScreen_usernameBar__input: document.getElementById('loginScreen-usernameBar--input'),
        loginScreen_passwordBar: document.getElementById('loginScreen-passwordBar'),
        loginScreen_passwordBar__text: document.getElementById('loginScreen-passwordBar--text'),
        loginScreen_passwordBar__input: document.getElementById('loginScreen-passwordBar--input'),
        loginScreen_buttons: document.getElementById('loginScreen-buttons'),
        loginScreen_buttons__logIn: document.getElementById('loginScreen-buttons--logIn'),
        loginScreen_buttons__signUp: document.getElementById('loginScreen-buttons--signUp'),
        loginScreen_MSG: document.getElementById('loginScreen-MSG'),
        lobbyScreen_HTML: document.getElementById('lobbyScreen'),
        lobbyScreen_menu: document.getElementById('lobbyScreen-menu'),
        chat_HTML: document.getElementById('chat'),
        chat_box: document.getElementById('chat-box'),
        chat_form: document.getElementById('chat-form'),
        chat_input: document.getElementById('chat-input'),
        lobbyScreen_menu__playerInfo___name: document.getElementById('lobbyScreen-menu--playerInfo---name'),
}

//Log In
serverLobby.lobby.loginScreen_buttons__logIn.onclick = function() {
    serverLobby.lobby.socket.emit('signIn',{username:serverLobby.lobby.loginScreen_usernameBar__input.value, password:serverLobby.lobby.loginScreen_passwordBar__input.value})
}
serverLobby.lobby.loginScreen_buttons__signUp.onclick = function() {
    serverLobby.lobby.socket.emit('signUp',{username:serverLobby.lobby.loginScreen_usernameBar__input.value, password:serverLobby.lobby.loginScreen_passwordBar__input.value})
}
serverLobby.lobby.socket.on('signInResponse', function(data) {
    if(data.success) {
        serverLobby.lobby.loginScreen_MSG.style.color = "white"
        serverLobby.lobby.loginScreen_MSG.innerHTML = "Welcome back!"
        document.body.style.animation = "fadeLobby 4s forwards"
        serverLobby.lobby.lobbyMUSIC.loop = true;
        serverLobby.lobby.lobbyMUSIC.volume = 0.15
        serverLobby.lobby.lobbyMUSIC.play()
        setTimeout(enter_Lobby, 2000)
    } else {
        serverLobby.lobby.loginScreen_MSG.style.color = "red"
        serverLobby.lobby.loginScreen_MSG.innerHTML = "&#9888 Username or password invalid."
    }
})
serverLobby.lobby.socket.on('signUpResponse', function(data) {
    if(data.success) {
        serverLobby.lobby.loginScreen_MSG.style.color = "white"
        serverLobby.lobby.loginScreen_MSG.innerHTML = "You must log in now to play."
        serverLobby.lobby.loginScreen_usernameBar__input.value = ""
        serverLobby.lobby.loginScreen_passwordBar__input.value = ""
    } else {
        serverLobby.lobby.loginScreen_MSG.style.color = "red"
        serverLobby.lobby.loginScreen_MSG.innerHTML = "&#9888 Username taken."
        serverLobby.lobby.loginScreen_usernameBar__input.value = ""
        serverLobby.lobby.loginScreen_passwordBar__input.value = ""
    }
})
serverLobby.lobby.socket.on('addToChat', function(data) {
    serverLobby.lobby.chat_box.innerHTML += '<div>' + data + '</div>'
})
serverLobby.lobby.socket.on('evalAnswer', function(data) {
    console.log(data)
})
serverLobby.lobby.chat_form.onsubmit = function(e) {
    e.preventDefault()
    if(serverLobby.lobby.chat_input.value[0] === '/') {
        serverLobby.lobby.socket.emit('evalServer', serverLobby.lobby.chat_input.values.slice(1))
    } else {
        serverLobby.lobby.socket.emit('sendMsgToServer', serverLobby.lobby.chat_input.value)
        serverLobby.lobby.chat_input.value = ''
    }
}

function enter_Lobby() {
    // lobbyScreen_menu__playerInfo___name.innerHTML = player.username
    serverLobby.lobby.login_HTML.style.display = "none"
    serverLobby.lobby.lobbyScreen_HTML.style.display = "inline-block"
}

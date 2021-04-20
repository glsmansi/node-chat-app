const users = []

const addUser = ({ id, username, room }) => {
    // clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if (existingUser) {
        return {
            error: 'username is in use'
        }
    }

    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}
addUser({
    id: 8,
    username: 'Mansi',
    room: 'AP'
})

addUser({
    id: 9,
    username: 'Soumya',
    room: 'AP'
})

addUser({
    id: 10,
    username: 'chujju',
    room: 'Odissa'
})

const user = getUser(28)
console.log(user)

const userList = getUsersInRoom('p')
console.log(userList)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
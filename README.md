# TO-DO List App

A single page app where users can register and create TO-DO lists.
Users can add and delete items from their list or mark them as completed.

## Models:

### User:
    username: String,
    password: String

### Item:
    title: String,
    completed: { type: Boolean, default: false },
    created: {type: Date, default: Date.now}

### List:
    title: String,
    created: {type: Date, default: Date.now},
    user: { id: { type: mongoose.Schema.Types.ObjectId, ref: "User" } },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }]

## RESTful Routes:

### List Routes:

| Name    | Path            | HTTP Verb  | Purpose                                |
| ------- |-----------------| -----------| ---------------------------------------|
| Index   | /lists          | GET        | Get all the lists belonging to user    |
| New     | /lists/new      | GET        | Show new list form                     |
| Create  | /lists          | POST       | Create new list                        |
| Show    | /lists/:id      | GET        | Show details of specific list          |
| Edit    | /lists/:id/edit | GET        | Show edit form for specific list       |
| Update  | /lists/:id      | PUT        | Update details of specific list        |
| Destroy | /lists/:id      | DELETE     | Delete specific list                   |

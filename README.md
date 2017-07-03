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
    created: {type: Date, default: Date.now},
    listId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }

### List:
    title: String,
    created: {type: Date, default: Date.now},
    userId: id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    
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

### Items Routes:

| Name    | Path                          | HTTP Verb  | Purpose                          |
| ------- |-------------------------------| -----------| ---------------------------------|
| Index   | /lists/:id/items              | GET        | Get all items belonging to list  |
| New     | /lists/:id/items/new          | GET        | Show new item form               |
| Create  | /lists/:id/items              | POST       | Create new item                  |
| Show    | /lists/:id/items/:itemId      | GET        | Show details of specific item    |
| Edit    | /lists/:id/items/:itemId/edit | GET        | Show edit form for specific item |
| Update  | /lists/:id/items/:itemId      | PUT        | Update details of specific item  |
| Destroy | /lists/:id/items/:itemId      | DELETE     | Delete specific item from list   |


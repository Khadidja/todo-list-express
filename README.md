# TO-DO List App

A single page app where users can register and add items to one TO-DO list.
Users can add and delete items from the list.

## Models:

### User:
    username: String,
    password: String

### Item:
    title: String,
    user:
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }

## RESTful Routes:

| Name    | Path            | HTTP Verb  | Purpose                                |
| ------- |-----------------| -----------| ---------------------------------------|
| Index   | /items          | GET        | Get list of all items specific to user |
| New     | /items/new      | GET        | Show new item form                     |
| Create  | /items          | POST       | Create new item                        |
| Show    | /items/:id      | GET        | Show details of specific item          |
| Edit    | /items/:id/edit | GET        | Show edit form for specific item       |
| Update  | /items/:id      | PUT        | Update details of specific item        |
| Destroy | /items/:id      | DELETE     | Delete specific item                   |

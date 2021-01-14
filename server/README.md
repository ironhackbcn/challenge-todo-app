# TO-DO-LIST

![logo](https://res.cloudinary.com/mirko1075/image/upload/v1607239517/logotipo1_qg8ebg.jpg)

## Description

A dynamic TO-TO-LIST

## User Stories - MVP

Example User stories
Create todo As a user I want to create a new todo/task with title and body and save it in the database.
List todos As a user I want to see all my todos in a list.
Delete todo As a user I want to delete a todo from the list when I don't want it anymore.

## Backlog

Update todo A a user I want to be able to modify an existing todo.
Done As a user I want to mark my todo as done.
Move todos As a user I want to rearrange my todos.

## Server Routes (back-end)

| **Route**                         | **Method** | **Description**                                                             | **Request - Body**                                                                                                                                          |
| --------------------------------- | ---------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/auth/signup`                    | `POST`     | Check if username exists and if not registers the user and returns a cookie | {firstName, lastName, address, country, cap, city, province, telephone, birthDay, birthMonth, birthYear, email, username, password, email, repeat password} |
| `/auth/login`                     | `POST`     | Check if username exists and if finds it returns a cookie                   | {username, password}                                                                                                                                        |
| `/auth/logout`                    | `GET`      | Logges user out and redirects to `login` page.                              |                                                                                                                                                             |
| `/auth/me`                        | `GET`      | Gets the user obj                                                           |                                                                                                                                                             |
| `/api/products/`                  | `GET`      | Private route, get the products list.                                       |                                                                                                                                                             |
| `/api/products/:productId`        | `GET`      | Private route, get the product detail                                       |                                                                                                                                                             |
| `/api/cart`                       | `GET`      | Private route, returns the shopping cart array                              |                                                                                                                                                             |
| `/api/cart/`                      | `POST`     | Create/modify/overwrite the shopping cart                                   |                                                                                                                                                             |
| `/api/product/:productId/reviews` | `POST`     | Add review for the selected product                                         |                                                                                                                                                             |
| `/api/product/:productId/reviews` | `GET`      | Delete review for the selected product                                      |                                                                                                                                                             |
| `/api/checkout`                   | `GET`      | ???                                                                         | NOT SURE                                                                                                                                                    |
| `/api/payment`                    | `GET`      | ???                                                                         | NOT SURE                                                                                                                                                    |

**Services**

# Client / Frontend

## React Router Routes (React App)

| Path                   | Component                                      | Permissions | Behaviour                                                                                                                                                   |
| ---------------------- | ---------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                    | HomePage                                       | Anon/auth   |                                                                                                                                                             |
| `/login`               | LoginPage                                      | Anon        | {firstName, lastName, address, country, cap, city, province, telephone, birthDay, birthMonth, birthYear, email, username, password, email, repeat password} |
| `/signup`              | SignupPage                                     | Anon        |                                                                                                                                                             |
| `/about`               | About                                          | Anon        |                                                                                                                                                             |
| `/contact`             | Contact                                        | Anon        |                                                                                                                                                             |
| `/private/profile`     | userProfile                                    | Auth        |                                                                                                                                                             |
| `/private/editProfile` | EditProfile                                    | Auth        |                                                                                                                                                             |
| `/products/`           | Private route, renders productList component   | Anon/Auth   |                                                                                                                                                             |
| `/products/:productId` | Private route, renders productDetail component | Anon/Auth   |                                                                                                                                                             |
| `/private/cart`        | Private route, shows shoppingCart              | Auth        |                                                                                                                                                             |
| `/private/favourites`  | Private route, shows favouritesList            | Auth        |                                                                                                                                                             |
| `/products/reviews`    | Show productsReviews                           | Anon/Auth   |                                                                                                                                                             |

##

## Models

USERS

```
{
  firstName: String,
  lastName: String,
  email: {type: String, unique: true },
  role: {type: String, default: "user" },
  phoneNumber: String,
  gender: {String, enum: ["Male", "Female", "Other"]},
  birthDateDay: Number,
  birthDateMonth: Number,
  birthDateYear: Number,
  address: String,
  country: String,
  city: String,
  state: String,
  CP: String,
  username: String,
  password: String,
  basket: [{ type: Schema.Types.ObjectId, ref: ‘Product’ }],
  shoppingHistory: [{ type: Schema.Types.ObjectId, ref: ‘Product’ }],  //ADD
  favourites:[{ type: Schema.Types.ObjectId, ref: ‘Product’ }],
  reviews: [{ type: Schema.Types.ObjectId, ref: ‘Review’ }],
}
, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
```

PRODUCTS

```
{
  name: String,
  description: String,
  materials: [{type: String }],
  category: {String, enum: ["Wallets man","Wallets woman", "Bags man","Bags woman","Passport case","Dog leashes"]},
  price: Number,
  pics: String,
  review: : [{ type: Schema.Types.ObjectId, ref: ‘Review’ }],
}
, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
```

REVIEWS

```
{
  title: String,
  description: String,
  rate: [{type: Number, min: 1, max: 5 }],
  reviewUser: [{ type: Schema.Types.ObjectId, ref: ‘User’ }],
  reviewProduct: [{ type: Schema.Types.ObjectId, ref: ‘Product’ }],
}
, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
```

## Backlog - FRONTEND

- **Checkout page** - As a user I want to be able to complete the buy process and checkout paying by Paypal or Credit card by Stripe 💪

## Backlog - BACKEND

- **Create/Modify / delete products** - As seller, we want to be able to edit our profiles whenever we need it. Here we will have our personal information, a profile picture, products in favourites chek the shopping card, keep on shopping and checkout. 🥊
- **Create/Modify/delete offers** - A a seller I want to see all the products categorized and searchable
- **Add/remove offers to products**- A seller I want to see the product detail, with different angles pictures and add it to the shopping cart
- **Enable upload multiple pictures for each product**

## Links

#### Git

[Repository Link](https://github.com/mirko1075/Aora)

[Deploy Link](https://why-so-serial.herokuapp.com/)

#### Trello

[Our Trello board](https://trello.com/b/yAu4Puzc/aora)

#### Slides

[Our slide show](https://docs.google.com/presentation/d/1rhgCc_YME-1Z9I68bBdCm8Mg-atVrasFP5CgQL9745M/edit?usp=sharing)

#### Figma

[Wireframes](https://www.figma.com/file/6HSnPmmt9bQyLpb7mZVKrb/Untitled?node-id=2%3A757)

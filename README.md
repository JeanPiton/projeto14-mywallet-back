# MyWallet-back
Back-end application for a financial management app.

# How it works
<details>
<summary>POST /sign-up</summary>
<summary>Create account</summary>
-Input: name, email and password

```
{
  name: string;
  email: string;
  password: string;
}
```
</details>
<details>
<summary>POST /sign-in</summary>
<summary>Login</summary>
-Input: email and password

```
{
  email: string;
  password: string;
}
```
-Output: name and token

```js
{
  name: string,
  token: string
}
```
</details>
<details>
<summary>POST /token</summary>
<summary>Check session</summary>
-Input: email and token

```
{
  email: string;
  token: string;
```
-Output: 200 if correct, 401 otherwise
</details>
<details>
<summary>DELETE /session</summary>
<summary>Close session</summary>
-Output: 200 on succes
</details>
<details>
  <summary>POST /transaction</summary>
  <summary>Create transaction</summary>
  -Input: value, description, type and email

  ```
  {
    value: float;
    desc: string;
    type: ('entrada'||'saida');
    email: string;
  }
  ```
</details>
<details>
  <summary>GET /transaction</summary>
  <summary>Return all transactions</summary>
  -Output: Array of transactions

  ```js
  [{
    value: float,
    desc: string,
    type: ('entrada'||'saida'),
    email: string,
    day: Date
  }]
  ```
</details>
<details>
  <summary>DELETE /transaction/:itemId</summary>
  <summary>Remove specified transaction</summary>
  -Output: 200 on success
</details>
<details>
  <summary>PUT /transaction</summary>
  <summary>Update transaction</summary>
  -Input: value, description, item id

  ```
  {
    value: float;
    desc: string;
    itemId: string;
  }
  ```
  -Output: updated transaction

  ```js
  [{
    value: float,
    desc: string,
    type: ('entrada'||'saida'),
    email: string,
    day: Date
  }]
  ```
</details>

# Technologies
- Node
- Express
- Bcrypt
- Cors
- Dayjs
- Dotenv
- Joi
- MongoDB
- Nodemon
- UUID

# How to run 
- Clone repository
- Use `npm install`
- Create file `.env` with properties `DATABASE_URL` and `PORT`
- To run in dev mode use `npm run dev`
- To run in deploy mode use `npm run start`


/* 

# 🌐 API — Application Programming Interface

✅✅ What is an API?

* **API** = Application Programming Interface
* A way for different software applications to **communicate and exchange data**.

✅✅ How does an API work?

Frontend → API → Backend → Database
                 ↓
Frontend ← API ← Backend


✅✅API Request & Response Flow

1. Frontend **sends a request**
2. Server **receives the request**
3. Server processes the request / gets data
4. Server **sends a response**
5. Response is commonly formatted as **JSON**
6. Frontend **uses/displays the data**

**Real-life example:**

Customer → Waiter → Chef
Customer ← Waiter ← Chef




✅✅ Common HTTP Methods

| Method     | Purpose                        |
| ---------- | ------------------------------ |
| **GET**    | Fetch/read data                |
| **POST**   | Create/send new data           |
| **PUT**    | Update/replace existing data   |
| **PATCH**  | Partially update existing data |
| **DELETE** | Delete data                    |

---

✅✅ What is an Endpoint?

An **endpoint** is a specific URL through which an API provides a particular resource or performs an action.

Example:

Base URL:
https://jsonplaceholder.typicode.com

Endpoint:
https://jsonplaceholder.typicode.com/posts





✅✅ What does an API Response look like
API data is commonly returned as **JSON**.

➡️Example:

```json
{
  "id": 101,
  "name": "Laptop",
  "price": 10000
}
```

➡️It can also return an **array of objects**:

```json
[
  {
    "id": 101,
    "name": "Laptop"
  },
  {
    "id": 102,
    "name": "Mobile"
  }
]
```


✅✅ What is JSON?

* **JSON** = JavaScript Object Notation
* A lightweight format commonly used to **exchange data between frontend and backend**.
* Uses **key-value pairs**.



✅✅Fetching Data

➡️1. Using `fetch()`

fetch("https://api.example.com/products")
  .then(response => response.json())        //📌then() is called callback function
  .then(data => {
    console.log(data);
  });

📌here:
* `fetch()` → sends a request to the API
* `response.json()` → converts the response into JavaScript data
* `data` → contains the API data



➡️2. Using `async/await`
`async/await` makes asynchronous API code **easier to read**.

async function getProducts() {
  const response = await fetch("https://api.example.com/products" );
  const data = await response.json();
  console.log(data);
}



✅✅ Common API Errors

* Network error** → Connection problem
* Invalid endpoint** → Wrong API URL
* Server error** → Problem on the server
* API unavailable** → API is not currently accessible
* 404** → Resource/endpoint not found
* 401** → Unauthorized
* 403** → Forbidden
* 500** → Internal server error


*/
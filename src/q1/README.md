### Challenge Fetch data from API

### Difficulty: Medium

You are given an API endpoint Url that fetches an array of users from the API

Your task is to make a 'GET' request to the API using the url fetching all users but filtering all users that do not have complete data.

The complete data is as shown below:

```typescript
interface UserData {
  id: number;
  name: string;
  email: string;
}
```

The endpoint is poorly developed and so returns some users with missing/empty data fields.
Filter out users that do not contain all the data fields and return only users will complete data.

### Examples:

```typescript
fetchAndFilterData([
  { id: 1, name: "John Doe", email: "johndoe@test.com" },
  { id: 2, email: "sussan@test.com" },
  { name: "Michael", email: "michael@test.com" },
]);
// Output: [{ id: 1, name: "John Doe", email: "johndoe@test.com" }]
fetchAndFilterData([]);
// Output: []
fetchAndFilterData([
  { id: 1, email: "johndoe@test.com" },
  { id: undefined, email: "sussan@test.com" },
  { name: "John Doe", email: "michael@test.com" },
]);
//Output: []
fetchAndFilterData([
  { id: 1, name: "John Doe", email: "johndoe@test.com" },
  { id: 2, email: "sussan@test.com" },
  { id: 3, name: "", email: "michael@test.com" },
  { id: 4, name: "Juliet", email: "juliet@test.com" },
]);
// Output: [{ id: 1, name: "John Doe", email: "johndoe@test.com" },{ id: 4, name: "Juliet", email: "juliet@test.com" },]
```

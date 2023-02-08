import ky from "ky";

export default {
  // new user will come from the form
  register(newUser) {
    return (
      ky
        .post("http://localhost:3000/api/users/create", {
          // This will be the request body(as JSON) that will be sent to the server
          json: newUser,
        })
        // this method will parse the incoming JSON response and return it

        .json()
    );
  },
};

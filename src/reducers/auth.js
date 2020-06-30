const initialState = {
  login: false,
  id: null,
  admin: false,
  userLogin: "",
  password: "",
  name: "",
  lname: "",
}

const auth = (state = initialState, action) => {
  switch (action.type) {
      case "logIn":
          return {
              ...state,
              login: true,
          }
      
      case "logOut": 
          return {
              ...state, 
              login: false
          }
      
      default:
      return state;
  }
}

export default auth;
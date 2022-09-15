import axiox from "axios"

const API_URL = "/api/users/"

//Rgister user
const register = async (userData) => {
  const response = await axiox.post(API_URL, userData)
  console.log("response", response)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }

  return response.data
}

const authService = {
  register,
}

export default authService

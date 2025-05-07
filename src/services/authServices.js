export const loginUser = async (email, password) => {
    // Example mock login service
    if (email === "admin@example.com" && password === "password") {
      return { token: "fake-jwt-token", user: { email, role: "admin" } };
    } else {
      throw new Error("Invalid credentials");
    }
  };
  
  export const registerUser = async (name, email, password) => {
    // Example mock register service
    return { message: "User registered successfully", user: { name, email } };
  };
  
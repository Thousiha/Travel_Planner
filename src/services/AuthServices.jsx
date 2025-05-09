// src/services/authServices.jsx
export const loginUser = async (email, password) => {
  try {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.token; // assuming backend returns { token: "..." }
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

export const registerUser = async (email, password) => {
  try {
    const res = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    return res.ok;
  } catch (error) {
    console.error("Signup error:", error);
    return false;
  }
};

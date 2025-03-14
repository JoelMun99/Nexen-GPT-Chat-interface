import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://192.168.5.101:8000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30-second timeout
});

export const sendMessage = async (message: string) => {
  try {
    console.log("Sending request with:", { prompt: message }); // Debug log
    const response = await api.post("/chat", { prompt: message });
    console.log("✅ Response received:", response.data);// Fix the request key
    return response.data;  // Expecting { message: "AI response here" }
  } catch (error: any) {
    console.error('Error sending message:',  error.response ? error.response.data : error.message);
    return { message: "Error fetching response from AI." }; // Return a fallback response
  }
};

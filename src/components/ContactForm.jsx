import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

export const ContactForm = ({ darkTheme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch("https://portfolio-backend-1pii.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } 
    } catch (error) {
      alert("Error: " + error.message);
    }
    finally{
        setLoading(false)
    }
  };

  return (
    <Box
  component="form"
  onSubmit={handleSubmit}
  sx={{
    mt: 6,
    mx: "auto", // This centers the box horizontally
    width: "100%",
    maxWidth: 500,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: 3,
    backgroundColor: darkTheme ? "rgba(0, 85, 255, 0.2)" : "rgba(0, 255, 157, 0.2)",
    color: darkTheme ? "#e9b1c4" : "#de6d2e",
    borderRadius: 2,
    boxShadow: 3,
  }}
>


      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: darkTheme ? "#e9b1c4" : "#de6d2e" }}
      >
        Contact Us
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
        InputLabelProps={{
          style: { color: darkTheme ? "#e9b1c4" : "#de6d2e" },
        }}
        InputProps={{
          style: { color: darkTheme ? "#e9b1c4" : "#de6d2e" },
        }}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
        InputLabelProps={{
          style: { color: darkTheme ? "#e9b1c4" : "#de6d2e" },
        }}
        InputProps={{
          style: { color: darkTheme ? "#e9b1c4" : "#de6d2e" },
        }}
      />

      <TextField
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
        InputLabelProps={{
          style: { color: darkTheme ? "#e9b1c4" : "#de6d2e" },
        }}
        InputProps={{
          style: { color: darkTheme ? "#e9b1c4" : "#de6d2e" },
        }}
      />

      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        InputLabelProps={{
          style: { color: darkTheme ? "#e9b1c4" : "#de6d2e" },
        }}
        InputProps={{
          style: { color: darkTheme ? "#e9b1c4" : "#de6d2e" },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: darkTheme ? "#e9b1c4" : "#de6d2e",
          color: "#fff",
          "&:hover": {
            backgroundColor: darkTheme ? "#d08fa5" : "#bf5b1f",
          },
        }}
        disabled={loading}
      >
        {loading ? "Submitting": "Submit"}
      </Button>
    </Box>
  );
};

import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Thanks for reaching out! We'll get back to you shortly.",
          },
        ]);
      }, 600);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.suggestions}>
          <p>
            💡 Try asking: <i>“What services do you offer?”</i>
          </p>
        </div>
        <div style={styles.chatBox}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                backgroundColor: msg.sender === "user" ? "#4f46e5" : "#2a2a3b",
                color: "#fff",
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div style={styles.inputArea}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={styles.input}
          />
          <button onClick={handleSend} style={styles.button}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  container: {
    width: "100%",
    maxWidth: "800px",
    height: "100%",
    backgroundColor: "#111827",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 0 30px rgba(0,0,0,0.4)",
  },
  suggestions: {
    fontSize: "14px",
    color: "#ccc",
    marginBottom: "10px",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    background: "linear-gradient(135deg, #1e1e2f, #2a2a3b)",
    padding: "15px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
    boxShadow: "inset 0 0 8px rgba(255, 255, 255, 0.04)",
  },
  inputArea: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1f2937",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    padding: "12px 20px",
    borderRadius: "8px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  message: {
    padding: "10px 14px",
    borderRadius: "10px",
    maxWidth: "70%",
    wordBreak: "break-word",
  },
};

export default Chatbot;

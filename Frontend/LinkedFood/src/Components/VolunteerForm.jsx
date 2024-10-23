import React from "react";

const VolunteerForm = ({ type }) => {
  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>
        {type === "transport"
          ? "Volunteer to Transport Food"
          : type === "report"
          ? "Report a New Food Source"
          : "Organization Food Donation"}
      </h2>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input type="text" placeholder="Enter your name" style={styles.input} />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input type="email" placeholder="Enter your email" style={styles.input} />
        </div>

        {/* Add more fields based on the type of volunteer work */}
        {type === "transport" && (
          <div style={styles.formGroup}>
            <label style={styles.label}>Availability</label>
            <input type="text" placeholder="Availability (e.g., Weekends)" style={styles.input} />
          </div>
        )}

        {type === "report" && (
          <div style={styles.formGroup}>
            <label style={styles.label}>Location</label>
            <input type="text" placeholder="Location of surplus food" style={styles.input} />
          </div>
        )}

        {type === "organization" && (
          <div style={styles.formGroup}>
            <label style={styles.label}>Organization Name</label>
            <input type="text" placeholder="Enter organization name" style={styles.input} />
          </div>
        )}

        <button type="submit" style={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
};

// Improved styles for a modern design
const styles = {
  formContainer: {
    marginTop: "30px",
    padding: "20px",
    textAlign: "left",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "5px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "border-color 0.2s ease-in-out",
  },
  inputFocus: {
    borderColor: "#ff6600",
  },
  submitBtn: {
    backgroundColor: "#ff6600",
    color: "white",
    padding: "12px",
    fontSize: "18px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  submitBtnHover: {
    backgroundColor: "#e65c00",
  },
};

export default VolunteerForm;

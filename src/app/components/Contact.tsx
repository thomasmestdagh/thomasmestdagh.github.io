"use client";

import Button from "./Button";
import styles from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "900155e3-2a94-40ea-97e6-e302d5369ad9");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
      (document.getElementById("contact-form") as HTMLFormElement).reset();
    } else {
      setResult(res.message);
    }
  };
  return (
    <>
      <div className={styles.information}>
        <img
          className={styles.image}
          src="/images/thomas.png"
          alt="Thomas Mestdagh"
        />
        <p className={styles.informationHeader}>
          You can <span>contact</span> me at:
        </p>
        <a
          className={styles.emailAddress}
          href="mailto:thomasmestdagh@live.com"
        >
          thomasmestdagh@live.com
        </a>
        <p className={styles.explanation}>
          Or you can write me using the contact form.
          <br />I will answer as soon as possible.
        </p>
      </div>
      <form className={styles.form} onSubmit={onSubmit} id="contact-form">
        <input
          type="hidden"
          name="access_key"
          value="900155e3-2a94-40ea-97e6-e302d5369ad9"
        ></input>
        <input
          type="hidden"
          name="subject"
          value="New message from thomasmestdagh.github.com"
        ></input>
        <label className={styles.inputLabel} htmlFor="firstName">
          First Name
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="your first name..."
          required
        />
        <label className={styles.inputLabel} htmlFor="lastName">
          Last Name
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="your last name..."
          required
        />
        <label className={styles.inputLabel} htmlFor="email">
          Email
        </label>
        <input
          className={styles.inputField}
          type="email"
          id="email"
          name="email"
          placeholder="your email address..."
          required
        />
        <label className={styles.inputLabel} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          cols={30}
          rows={10}
          placeholder="your message..."
          className={`${styles.inputField} ${styles.textArea}`}
          required
        ></textarea>
        {/* <Button>Send Message &rarr;</Button> */}

        <button className={styles.submitButton} type="submit">
          Send Message &rarr;
        </button>
        <span className={styles.submitCheck}>{result}</span>
      </form>
    </>
  );
}

"use client";

import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Register() {
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const form = document.getElementById("form");

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      let elem = event.target as HTMLFormElement;

      console.log("Elem: ", elem);

      if (elem !== null) {
        const name = (elem.name as unknown as HTMLInputElement).value;
        const email = (elem.email as unknown as HTMLInputElement).value;
        const password = (elem.password as unknown as HTMLInputElement).value;
        const repPassword = (elem.repPassword as unknown as HTMLInputElement)
          .value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          console.error("Ошибка: Неверный формат электронной почты");
          return;
        }

        if (password !== repPassword) {
          console.error("Ошибка: Пароли не совпадают");
          return;
        }
        try {
          const formData = { name, email, password };
          const response = await axios.post(
            process.env.BACKEND_URL as string,
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } catch (error) {
          console.error(error);
        }
      } else {
        return;
      }
    };

    form?.addEventListener("submit", handleSubmit);
    return () => {
      form?.removeEventListener("submit", handleSubmit);
    };
  }, [formErrors]);

  return (
    <section>
      <div>
        <img src="" alt="" />
        <h1>Sign Up</h1>
      </div>
      <div>
        <h2>Welcome</h2>
        <p>Let’s sign you up quickly</p>
        <form id="form" method="POST">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <input
            type="password"
            name="repPassword"
            id="repPassword"
            placeholder="repPassword"
          />
          <div>
            <button type="submit">Submit</button>
            <p>
              already have an account? <Link href="/auth/login">log-in</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

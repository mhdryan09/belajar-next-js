import Link from "next/link";
import styles from "./Register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    // tangkap nilai dari fom
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };
    // lalu kirimkan data ke api ini
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset(); // reset semua input pada form
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email already exists" : "");
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register Page</h1>

      {error && <p className={styles.register__error}>{error}</p>}

      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register__form__item}>
            <label
              htmlFor="email"
              className={styles.register__form__item__label}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={styles.register__form__item__input}
            />
          </div>

          <div className={styles.register__form__item}>
            <label
              htmlFor="fullname"
              className={styles.register__form__item__label}
            >
              Fullname
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Fullname"
              className={styles.register__form__item__input}
            />
          </div>

          <div className={styles.register__form__item}>
            <label
              htmlFor="password"
              className={styles.register__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={styles.register__form__item__input}
            />
          </div>

          <button
            type="submit"
            className={styles.register__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>

      <p className={styles.register__link}>
        Have an account? Sign In <Link href="/auth/login">here</Link>
      </p>
    </div>
  );
};

export default RegisterView;

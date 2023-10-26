import styles from "./Navbar.module.css";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data }: any = useSession();

  return (
    <div className={styles.navbar}>
      <div>Navbar</div>
      <div>
        {data && data.user.fullname}
        {data ? (
          <button className={styles.button} onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className={styles.button} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

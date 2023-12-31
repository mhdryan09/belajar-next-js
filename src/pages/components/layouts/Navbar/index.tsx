/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./Navbar.module.css";
import { signIn, useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <div className={styles.navbar}>
      <div>Navbar</div>
      <div className={styles.profile}>
        
        {data?.user?.image && (
          <Image
            width={30}
            height={30}
            className={styles.avatar}
            src={data.user.image}
            alt={data.user.fullname}
          />
        )}

        {data && data.user.fullname}
        {""}

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
};

export default Navbar;

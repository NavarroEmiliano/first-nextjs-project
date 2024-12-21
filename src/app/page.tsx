"use client";
import { useState } from "react";
import FormSearchUser from "./components/FormSearchUser";
import UserCardInfo from "./components/UserCardInfo";
import { User } from "./types/user.type";
import ErrorMessage from "./components/ErrorMessage";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.status === 404) {
      setUser(null);
      setError("User not found");
      return;
    }
    setUser(await res.json());
    setError(null);
  };
  return (
    <>
      <FormSearchUser getUser={getUser} />
      {user && <UserCardInfo user={user} />}
      {error && <ErrorMessage text={'User not found'}/>}
    </>
  );
};

export default Home;

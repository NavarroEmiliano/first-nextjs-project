"use client";
import { useState } from "react";
import FormSearchUser from "./components/FormSearchUser";
import UserCardInfo from "./components/UserCardInfo";
import { User } from "./types/user.type";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.status === 404) return;
    const data = await res.json();
    setUser(data);
  };
  return (
    <>
      <FormSearchUser getUser={getUser} />
      {user && <UserCardInfo user={user} />}
    </>
  );
};

export default Home;

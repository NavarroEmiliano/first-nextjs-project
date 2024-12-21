"use client";
import { useEffect, useState } from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkTheme(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleDark = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  return (
    <header className="mb-4 flex justify-between">
      <h1 className="text-4xl font-semibold text-blue-800 dark:text-white">
        devfinder
      </h1>
      <div className="flex items-center gap-2">
        <span className="uppercase text-blue-800 dark:text-white">
          {darkTheme ? "light mode" : "dark mode"}
        </span>
        <button onClick={handleDark} className="duration-200 hover:-rotate-45">
          {darkTheme ? (
            <SunIcon
              className="fill-blue-800 dark:fill-white"
              height={25}
              width={25}
            />
          ) : (
            <MoonIcon
              className="fill-blue-800 dark:fill-white"
              height={27}
              width={27}
            />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

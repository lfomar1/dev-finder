"use client";
import { useEffect, useState } from "react";
import { fetchGithubData } from "../utils/api";
import { User } from "../types/user";

export const useData = (userName: string) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [userExists, setUserExists] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async (userName: string) => {
      try {
        const response = await fetchGithubData(userName);
        setUser(response);
        console.log(response);
        setUserExists(true);
      } catch (error) {
        setError("can't find user");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(userName);
  }, [userName]);

  const newUser = {
    userName: user?.login,
    company: user?.company,
    avatar: user?.avatar_url,
    twitter: user?.twitter_username,
    bio: user?.bio,
    name: user?.name,
    location: user?.location,
  };

  return { isLoading, error, newUser, userExists };
};

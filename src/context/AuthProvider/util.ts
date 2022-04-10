import { Api } from "./../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage(): IUser | null {
  const json = localStorage.getItem("user");

  if (!json) {
    return null;
  }

  return JSON.parse(json) ?? null;
}

export async function loginRequest(email: string, password: string) {
  try {
    const response = await Api.post(`/login`, { email, password });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

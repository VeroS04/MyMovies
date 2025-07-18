import { mapToArray } from "../../helpers/mapToArray";
import type { SignUpPayload, User } from "../../types";
import { api } from "../../utils";




const add = async (userPrueba: SignUpPayload) => {
  const response = await api.post("/users.json", userPrueba);
  return response.data;
};

const getAll = async (): Promise<User[]> => {
  const response = await api.get("/users.json");
  return mapToArray(response.data);
};

const getBy = async (type: "email" | "token", value: string) => {
  const users = await getAll();

  const user = users.find((user) => user[type] === value);

  return user;
};

const update = async ({ id, ...rest }: Partial<User>) => {
  const response = await api.patch(`/users/${id}.json`, { ...rest });
  return response.data;
};

export const servicesUser = { add, getAll, update, getBy };
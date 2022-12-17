import { stat } from "fs/promises";

export const isExist = async (path) => {
  try {
    await stat(path);
  } catch (e) {
    return false;
  }
  return true;
};

import { rm } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { isExist } from "../helpers/index.js";

const remove = async () => {
  // Write your code here
  const filename = fileURLToPath(import.meta.url);
  const filePath = join(dirname(filename), "files", "fileToRemove.txt");
  if (!(await isExist(filePath))) {
    throw new Error("FS operation failed");
  }
  await rm(filePath);
};

await remove();

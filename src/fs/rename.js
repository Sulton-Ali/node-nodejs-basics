import { dirname, join } from "path";
import { rename as reName } from "fs/promises";
import { fileURLToPath } from "url";

import { isExist } from "../helpers/index.js";

const rename = async () => {
  // Write your code here
  const filename = fileURLToPath(import.meta.url);
  const oldPath = join(dirname(filename), "files", "wrongFilename.txt");
  const newPath = join(dirname(filename), "files", "properFilename.md");

  if (!(await isExist(oldPath))) {
    throw new Error("FS operation failed");
  }
  if (await isExist(newPath)) {
    throw new Error("FS operation failed");
  }
  await reName(oldPath, newPath);
};

await rename();

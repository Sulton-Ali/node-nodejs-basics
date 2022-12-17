import { join, dirname } from "path";
import { promises } from "fs";
import { fileURLToPath } from "url";

const create = async () => {
  // Write your code here
  const filename = fileURLToPath(import.meta.url);
  const filePath = join(dirname(filename), "files", "fresh.txt");
  try {
    promises.lstat;
    await promises.stat(filePath);
  } catch (error) {
    return await promises.writeFile(filePath, "I am fresh and young");
  }
  throw new Error("FS operation failed");
};

await create();

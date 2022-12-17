import { join, dirname } from "path";
import { promises } from "fs";
import { fileURLToPath } from "url";

const copy = async () => {
  // Write your code here
  const filename = fileURLToPath(import.meta.url);
  const sourceDirPath = join(dirname(filename), "files");
  const targetDirPath = join(dirname(filename), "files_copy");
  try {
    await promises.stat(sourceDirPath);
    await promises.cp(sourceDirPath, targetDirPath, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch (err) {
    if (err?.code === "ENOENT" && err?.errno == -2) {
      throw new Error("FS operation failed");
    }
    if (err?.code == "ERR_FS_CP_EEXIST") {
      throw new Error("FS operation failed");
    }
  }
};

await copy();

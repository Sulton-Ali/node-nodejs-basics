import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, "./files/script.js");

  const child = fork(fileName, args, {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);

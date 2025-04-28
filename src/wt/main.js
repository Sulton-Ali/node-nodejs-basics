import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  // Write your code here
  const logicalCoreCount = os.cpus().length;
  console.log("Count of logical cpus: %s", logicalCoreCount);

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, "./worker.js");

  const promiseList = [];

  for (let index = 0; index < logicalCoreCount; index++) {
    promiseList.push(
      new Promise((resolve) => {
        const worker = new Worker(fileName, {
          workerData: index + 10,
        });

        worker.on("message", (value) => {
          resolve({
            status: "resolved",
            data: value,
          });
        });

        worker.on("error", () => {
          resolve({
            status: "error",
            data: null,
          });
        });
      })
    );
  }

  Promise.all(promiseList).then((result) => {
    console.log("Result of computation:");
    const table = [];
    result.forEach((item, index) => {
      table.push({
        n: index + 10,
        ...item,
      });
    });
    console.table(table);
  });
};

await performCalculations();

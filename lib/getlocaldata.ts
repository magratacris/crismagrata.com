import fsPromises from "fs/promises";
import path from "path";
//types
import { IProps } from "@/Interfaces/Projects";

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "data/projects.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  // Parse data as json
  const objectData = JSON.parse(jsonData) as IProps[];

  return objectData;
}

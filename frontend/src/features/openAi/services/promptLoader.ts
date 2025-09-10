import { readFileSync } from "fs";
import { join } from "path";

export const promptLoader = async ({ fileName }: { fileName: string }) => {
  try {
    const filePath = join(process.cwd(), "src", "features", "openai", "prompts", `${fileName}.md`);
    const content = readFileSync(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error("Error loading prompt:", error);
    return undefined;
  }
};

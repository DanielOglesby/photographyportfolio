import fs from "fs/promises";
import path from "path";

interface Photo {
  id: number;
  src: string;
  orientation: "portrait" | "landscape";
}

export async function getPhotos(category: string): Promise<Photo[]> {
  const dir = path.join(process.cwd(), "public", "photos", category);
  const files = await fs.readdir(dir);

  return files
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))
    .map((file, index) => ({
      id: index,
      src: `/photos/${category}/${file}`,
      orientation: "portrait", // Add orientation detection if needed
    }));
}

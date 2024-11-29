import { Nav } from "@/components/Nav";
import { PhotoGrid } from "@/components/PhotoGrid";
import { getPhotos } from "@/utils/photos";

export default async function Home() {

  const photos = await getPhotos('home');

  return (
    <>
      <Nav />
      <main className="mt-20 px-4">
        <PhotoGrid photos={photos} />
      </main>
    </>
  );
}
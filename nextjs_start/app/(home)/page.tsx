// 해당 Metadata 부분이 페이지의 Head 부분에 표시됨
export const metadata = {
  title: 'Home',
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000)); // 5초 대기
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {JSON.stringify(movies)}
    </div>
  );
}
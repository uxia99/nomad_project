"use client";

import React, { useEffect, useState } from 'react';

// 해당 Metadata 부분이 페이지의 Head 부분에 표시됨
// export const metadata = {
//   title: 'Home',
//   // description: 'The React Framework for Production',
// }

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? "Loading..." : JSON.stringify(movies)}
    </div>
  );
}


// 지금까지의 방식은 평범한 React App에서 외부 라이브러리나 패키지 없이 fetch하던 방식으로, 
// 항상 Client Side에서 fetch가 되며 사용자에게 로딩화면을 구현해줘야 함.
// 이 말은 즉슨 브라우저가 API에 요청을 보낸다는 것이고, 브라우저에서 API를 확인할 수 있음

// → API Key처럼 노출되면 안되는 것들을 넣을 수 없음
// → 데이터베이스와 통신할 수 없다는 의미 : 프론트엔드에서 DB로 통신하면 아무나 DB의 비밀번호에 접근할 수 있음

// 이를 방지하면서 Client Side에서 돌리기 위해서는 보안을 위해 항상 API를 중간에 만들어야하며, 
// DB에 직접 통신할 수 없음. API에 통신한 후 API가 안전한 환경에 있다면 그제서야 DB에 요청을 보내는 구조.
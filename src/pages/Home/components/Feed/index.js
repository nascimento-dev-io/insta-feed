import { useEffect, useState } from "react";

import { api } from "../../../../services/api";

import FeedCard from "./FeedCard";
import { Container } from "./styles";

import FallbackMessage from "../../../../components/FallbackMessage";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data } = await api.get("/photos");
      setPosts(data);
    }
    getPosts();
  }, []);

  return (
    <Container>
      {posts.length > 0 ? (
        posts.map((post) => <FeedCard key={post.id} post={post} />)
      ) : (
        <FallbackMessage>Nenhum post disponível</FallbackMessage>
      )}
    </Container>
  );
}

export default Feed;

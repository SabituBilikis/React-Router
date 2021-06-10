import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/card";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      });
  }, [params]);

  return (
    <div>
      {posts.map(({ title, id, userId, body }) => (
        <Card key={id} title={title} body={body} userId={userId} />
      ))}
    </div>
  );
};

export default Posts;

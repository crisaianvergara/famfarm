import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Container } from "react-bootstrap";

const Blog = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://127.0.0.1:8000/blogs/${id}`);

  return (
    <Container>
      <div className="blog wrapper">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
            <div>{blog.body}</div>
          </article>
        )}
      </div>
    </Container>
  );
};

export default Blog;

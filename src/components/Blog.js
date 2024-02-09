import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Container } from "react-bootstrap";

const Blog = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://127.0.0.1:8000/blogs/${id}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://127.0.0.1:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/blogs");
    });
  };

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
            <button onClick={handleDelete} className="btn btn-danger my-3">
              Delete
            </button>
          </article>
        )}
      </div>
    </Container>
  );
};

export default Blog;

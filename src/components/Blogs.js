import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import "../styles/Blogs.scss";
import { Container, Card } from "react-bootstrap";

const Blogs = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://127.0.0.1:8000/blogs/");

  return (
    <Container>
      <div className="blogs wrapper">
        <h1>Blog</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          ratione asperiores fuga atque. Nesciunt non quo nulla officia
          explicabo culpa at optio nihil. Minus aliquam voluptatem non pariatur
          hic vitae.
        </p>
        <Link to={`/blogs/write`} className="btn btn-primary">
          Write
        </Link>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blogs &&
          blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <Card className="my-3">
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <p>Written by: {blog.author}</p>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Blogs;

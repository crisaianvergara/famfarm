import useFetch from "./useFetch";
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
        {error && <div>{error}</div>}
        {isPending && <p>Loading...</p>}
        {blogs &&
          blogs.map((blog) => (
            <Card className="my-3" key={blog.id}>
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.body}</Card.Text>
                <p>Written by: {blog.author}</p>
              </Card.Body>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default Blogs;

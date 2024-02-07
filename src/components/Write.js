import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form } from "react-bootstrap";

const Write = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      e.preventDefault();
      e.stopPropagation();

      const blog = { title, body, author };

      setIsPending(true);

      fetch("http://127.0.0.1:8000/blogs/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        setIsPending(false);
        history.push("/blogs");
      });
    }
  };

  return (
    <Container>
      <div className="write wrapper">
        <h1>Write a New Blog</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cumque
          nihil quibusdam, repellat provident dolores suscipit ipsum tempora
          exercitationem perspiciatis, labore iure nobis, a natus in eius culpa
          ducimus temporibus.
        </p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control
              required
              as="textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={5}
            />
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              required
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          </Form.Group>
          {!isPending && <button className="btn btn-primary">Publish</button>}
          {isPending && (
            <button className="btn btn-primary" disabled>
              Publish...
            </button>
          )}
        </Form>
      </div>
    </Container>
  );
};

export default Write;

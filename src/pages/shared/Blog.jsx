import React, { useEffect, useState } from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://master-chef-server-ashik-faysal.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="text-center">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="btn btn-outline" onClick={toPdf}>
            Generate Pdf
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        {blogs.map((blog) => (
          <div className="card border p-4 my-4 bg-slate-600" key={blog.id}>
            <p className="font-bold">
              {blog.id}. &nbsp;{blog.question}
            </p>
            <p className="font-semibold">Answer:{blog.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

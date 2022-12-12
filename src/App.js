import React, { useState } from "react";
import { marked } from "marked";

const App = () => {
  marked.setOptions({
    breaks: true,
  });
  const [input, setinput] = useState(`
# H1
## H2
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item
> blockquote
![alt text](image.jpg)
**bold text**
  `);
  const handleChange = (event) => {
    setinput(event.target.value);
  };
  return (
    <div className="container">
      <div className="header text-center">
        <h1>MarkdownPreviewer</h1>
      </div>
      <div className="row mt-3 d-flex justify-content-center align-items-center form-group">
        <div className="col-6">
          <label for="editor">
            <h6>Enter the Markdown:</h6>
          </label>
          <textarea
            className="form-control"
            id="editor"
            onChange={handleChange}
            value={input}
          ></textarea>
        </div>
        <div className="col-6">
          <label for="preview">
            <h6>Result:</h6>
          </label>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(input) }}
          ></div>
        </div>
        <div></div>
      </div>
      <div className="cheatsheet">
        <a href="https://www.markdownguide.org/cheat-sheet/">
          Need help? use this cheatsheet<br></br> Brauchen Sie hilfe? setze diesen cheatsheet ein
        </a>
      </div>
    </div>
  );
};

export default App;

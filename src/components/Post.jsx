export function Post({ author, content }) {
  return (
    <div>
      <div className="author">{author}</div>
      <div className="content">{content}</div>
    </div>
  );
}

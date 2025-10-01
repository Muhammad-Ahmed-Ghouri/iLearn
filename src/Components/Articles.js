import articlesList from "../articlesList";

export default function Articles() {
  return (
    <div className="articles-section">
      <h1 className="section-heading">Web Development Articles</h1>

      <div className="container">
        {articlesList.map((article) => (
          <div className="box" key={article.id}>
            <h2>{article.heading}</h2>
            <p>{article.text}</p>
            <button
              className="btn"
              onClick={() => {
                console.log(article.heading);
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

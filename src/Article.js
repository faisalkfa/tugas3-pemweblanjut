import React, { useState } from 'react';

function Article({ article }) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p>{showFullText ? article.content : article.content.substring(0, 300)}</p>
      {article.continuation && (
        <div>
          {showFullText ? (
            <p>{article.continuation}</p>
          ) : (
            <button onClick={toggleText}>Baca Lebih Lanjut</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Article;

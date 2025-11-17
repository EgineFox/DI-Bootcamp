import React from 'react';
import jsonData from '../data.json';

function PostList() {
  return (
    <div style={{ padding: "20px" }}>
      {jsonData.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;

import React from "react";

const Article = () => {
  return (
    <>
      <h1 className="mb-1 w-full text-4xl font-bold">This is article title.</h1>
      <div className="mb-2 flex items-center justify-start space-x-2">
        <p className="text-xs">投稿日: </p>
        <p className="text-xs">2023/01/03</p>
      </div>

      <hr className="my-2" />

      <div className="container"></div>
    </>
  );
};

export default Article;

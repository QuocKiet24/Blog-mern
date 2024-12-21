import React from "react";
import SingleComment from "./SingleComment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Leave a comment..."
          className="w-full rounded-xl p-4"
        />
        <button className="bg-blue-800 px-4 py-2 text-white font-medium rounded-xl">
          Send
        </button>
      </div>
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  );
};

export default Comments;

import React, { useState, useEffect } from "react";

const Comments = ({ comment }) => {    
  return (
    <div className="bg-white rounded my-2 p-2">
      <p className="font-bold">{comment?.user?.username}</p>
      <p className="text-gray-500">{comment?.body}</p>
    </div>
  );
};

export default Comments;

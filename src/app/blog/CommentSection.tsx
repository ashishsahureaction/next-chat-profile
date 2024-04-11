'use client'

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface Comment {
  firstName: string;
  message: string;
  timestamp: number;
  id: string;
}

export default function CommentSection(): JSX.Element {
  const [firstName, setFirstName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const loadedComments: Comment[] = JSON.parse(localStorage.getItem("comments") || "[]");
    loadedComments.sort((a, b) => b.timestamp - a.timestamp);
    setComments(loadedComments);
  }, []);

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value);
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newComment: Comment = { 
      firstName, 
      message, 
      timestamp: new Date().getTime(),
      id: new Date().toISOString()
    };
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setFirstName('');
    setMessage('');
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <>
      <div className="space-y-4 mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Leave a Comment</h2>
        <div className="grid gap-4">
          <form onSubmit={handleSubmit}>
            <input
              className="w-full rounded-md py-2.5 px-4 border-2 text-sm outline-[#007bff]"
              id="comment-name"
              placeholder="Name"
              type="text"
              value={firstName}
              onChange={handleFirstName}
            />
            <input
              className="w-full rounded-md mt-2 py-2.5 px-4 border-2 text-sm outline-[#007bff]"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="min-h-[10rem] mt-2 max-w-none border-2  font-semibold rounded-md text-sm px-4 py-2.5 w-full"
              id="comment-message"
              placeholder="Message"
              value={message}
              onChange={handleMessage}
            />
            <button
              className="text-white mt-4 bg-orange-600 hover:bg-blue-600 hover:scale-95 font-semibold rounded-md text-sm px-4 py-2.5 w-1/3 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
      <hr className='mt-4'/>
      <div className="space-y-4 mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Comments</h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="font-semibold">{comment.firstName}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(comment.timestamp)}
                </div>
              </div>
              <div>{comment.message}</div>
              <hr className='mt-4'/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}





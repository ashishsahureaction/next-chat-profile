import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define a type for the post objects
type Post = {
  href: string;
  imgSrc: string;
  title: string;
  date: string;
};

function LatestPosts(): JSX.Element {
  // Post array with type annotation
  const posts: Post[] = [
    { href: "/blog/render", imgSrc: "/images/col.jpg", title: "From Render to Reality", date: "June 01, 2020" },
    { href: "/blog/update", imgSrc: "/images/col2.jpg", title: "React 19 Unveiled", date: "June 12, 2023" },
    { href: "/blog/vllm", imgSrc: "/images/col3.jpg", title: "World of Visual Language Models", date: "December 05, 2024" }
  ];

  return (
    <>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Latest Posts</h2>
        <div className="grid gap-4">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} passHref>
              <div className='flex gap-4 cursor-pointer'>
                <Image alt="Cover image" className="rounded overflow-hidden object-cover hover:scale-95 duration-300" height={120} src={post.imgSrc} width={120} />
                <div>
                  <h3 className="font-bold hover:underline">{post.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Posted on {post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default LatestPosts;

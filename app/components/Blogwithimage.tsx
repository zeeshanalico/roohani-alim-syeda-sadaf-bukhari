// components/BlogWithImage.tsx

import React from 'react';
import Image from 'next/image';
import img1 from '../assets/Online-Peer-Baba.jpeg'
import blogPosts from '../data/blogs'
import { useRouter } from 'next/navigation';


const BlogWithImage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen shadow-inner border-green-500 ">
      <div className="w-1/3 h-full relative hidden md:block">
        <Image
          src={img1}
          alt="Left Side Image"
          width={300}
          height={500}
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="lg:w-2/3 h-full overflow-y-scroll p-6 bg-slate-200">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={300}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <p>{post.author}</p>
                  <p>{post.date}</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={(e) => {
                  e.preventDefault()
                  router.push(`blog/${post.link}`)
                }}>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogWithImage;

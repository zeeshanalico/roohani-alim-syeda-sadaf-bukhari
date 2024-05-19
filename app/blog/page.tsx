'use client'
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/NavBar';
import Image from "next/image";
import logo from '../assets/Rohani-Amil.png'
import Footer from '../components/Footer';
import blogPosts from '../data/blogs'
import { useRouter } from 'next/navigation';


const Blog: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Image src={logo} alt="logo Rohani Amil" width={300} height={300} className="m-3" />

      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={300}
                  objectFit="cover"
                  className="w-full h-full"
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
                  <button className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500" onClick={(e) => {
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
      </main>
    </div>
  );
};

export default Blog;

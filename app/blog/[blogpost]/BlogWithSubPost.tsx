import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';

interface SubPost {
    title: string;
    description: string;
}

interface BlogPost {
    title: string;
    image: string;
    description: string;
    author: string;
    date: string;
    subPost: SubPost[];
}

interface BlogWithSubPostsProps {
    post: BlogPost;
}

const BlogWithSubPost: React.FC<BlogWithSubPostsProps> = ({ post }) => {
    return (
        <>
            <div className="flex flex-col  bg-gray-50 min-h-screen">
                <div className="w-full h-64 relative
                ">
                    <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover rounded-t-md md:rounded-t-none md:rounded-l-md shadow-lg"
                    />
                </div>
                <div className="w-full p-8 bg-white rounded-b-md md:rounded-b-none md:rounded-r-md shadow-lg">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
                    <p className="text-gray-700 mb-6">{post.description}</p>
                    <div className="flex items-center justify-between mb-8">
                        <div className="text-sm text-gray-600">
                            <p className="font-medium">By: {post.author}</p>
                            <p>{post.date}</p>
                        </div>
                    </div>
                    <div>
                        {post.subPost.map((sub, index) => (
                            <div key={index} className="mb-6 bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{sub.title}</h2>
                                <p className="text-gray-600">{sub.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogWithSubPost;

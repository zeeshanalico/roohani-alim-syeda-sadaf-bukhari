'use client'
import blogs from '../../data/blogs'
import BlogWithSubPost from "./BlogWithSubPost";
type BlogPost = {
    title: string;
    link: string;
    image: string;
    description: string;
    author: string;
    date: string;
    subPost: {
        title: string;
        description: string;
    };
};

export default function Page({ params }: { params: { blogpost: string } }) {

    const propPost = blogs.find(blog => blog.link == params.blogpost)
    return (
        <>
            <BlogWithSubPost post={propPost as {
                title: string;
                link: string;
                image: string;
                description: string;
                author: string;
                date: string;
                subPost: {
                    title: string;
                    description: string;
                }[];
            }} />

        </>);
}
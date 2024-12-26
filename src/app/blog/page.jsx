import Link from 'next/link';
import Image from 'next/image'; // Importing Image component
import { blogPosts } from '@/app/data/data';

export default function BlogList() {
  return (
    <div className="mt-12 mb-24 px-2 2xl:px-12">
      <h1 className="text-3xl lg:text-5xl font-bold text-dark dark:text-light mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.slug} className="p-4 border rounded-lg shadow-lg flex flex-col justify-between">
            <h2 className="text-xl font-bold text-dark dark:text-light">{post.title}</h2>
            <Image 
              src={post.image} 
              width={500} 
              height={300} 
              alt={post.title} 
              className="rounded mb-4 object-cover w-full h-48 sm:h-64 lg:h-80" 
              priority // Add the priority property here
            />
            <p className="text-dark/80 dark:text-light/80">{post.content.substring(0, 100)}...</p>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-accentDarkPrimary font-semibold">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

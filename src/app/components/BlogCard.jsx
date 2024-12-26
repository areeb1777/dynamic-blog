import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ slug, title, content, image }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg flex flex-col justify-between">
      <h2 className="text-xl font-bold text-dark mb-4">{title}</h2>
      <Image 
        src={image} 
        width={500} 
        height={300} 
        alt={title} 
        className="rounded mb-4 object-cover w-full h-48 sm:h-64 lg:h-80" 
        priority 
      />
      <p className="text-dark/80 mb-4">
        {content.substring(0, 100)}...
      </p>
      <Link href={`/blog/${slug}`}>
        <span className="mt-4 inline-block text-accentDarkPrimary font-semibold">
          Read More
        </span>
      </Link>
    </div>
  );
};

export default BlogCard;

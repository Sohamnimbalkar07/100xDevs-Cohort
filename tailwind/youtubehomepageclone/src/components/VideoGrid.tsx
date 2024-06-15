import { VideoCard } from "./VideoCard";

const Videos = [
  {
    title: "What are Cookies in NodeJS?",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Introduction to Express.js",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "150k",
    timestamp: "3 days ago",
  },
  {
    title: "Understanding Middleware in NodeJS",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "200k",
    timestamp: "1 week ago",
  },
  {
    title: "NodeJS File System Module Explained",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "120k",
    timestamp: "5 days ago",
  },
  {
    title: "Building REST APIs with NodeJS",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "180k",
    timestamp: "2 weeks ago",
  },
  {
    title: "What are Cookies in NodeJS?",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Introduction to Express.js",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "150k",
    timestamp: "3 days ago",
  },
  {
    title: "Understanding Middleware in NodeJS",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "200k",
    timestamp: "1 week ago",
  },
  {
    title: "NodeJS File System Module Explained",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "120k",
    timestamp: "5 days ago",
  },
  {
    title: "Building REST APIs with NodeJS",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "180k",
    timestamp: "2 weeks ago",
  },
  {
    title: "What are Cookies in NodeJS?",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Introduction to Express.js",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "150k",
    timestamp: "3 days ago",
  },
  {
    title: "Understanding Middleware in NodeJS",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "200k",
    timestamp: "1 week ago",
  },
  {
    title: "NodeJS File System Module Explained",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "120k",
    timestamp: "5 days ago",
  },
  {
    title: "Building REST APIs with NodeJS",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Piyush Garg",
    views: "180k",
    timestamp: "2 weeks ago",
  }
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {Videos.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development with Next.js 15",
    slug: "future-of-web-development-nextjs-15",
    excerpt:
      "Discover how Next.js 15 is revolutionizing web development with its new features, improved performance, and developer experience.",
    category: "Framework",
    readTime: "8 min read",
    date: "February 20, 2025",
    author: "Sarah Chen",
  },
  {
    id: 2,
    title: "Building AI-Powered Applications",
    slug: "building-ai-powered-applications",
    excerpt:
      "Learn how to integrate modern AI capabilities into your web applications using the latest APIs and best practices.",
    category: "Artificial Intelligence",
    readTime: "12 min read",
    date: "February 18, 2025",
    author: "Michael Rodriguez",
  },
  {
    id: 3,
    title: "Mastering Modern CSS Techniques",
    slug: "mastering-modern-css-techniques",
    excerpt:
      "Explore advanced CSS features like Container Queries, Cascade Layers, and the new color functions revolutionizing web design.",
    category: "Styling",
    readTime: "10 min read",
    date: "February 15, 2025",
    author: "Emma Thompson",
  },
  {
    id: 4,
    title: "Web Performance Optimization Guide",
    slug: "web-performance-optimization-guide",
    excerpt:
      "A comprehensive guide to optimizing your web application's performance, from image optimization to code splitting.",
    category: "Performance",
    readTime: "15 min read",
    date: "February 12, 2025",
    author: "David Park",
  },
  {
    id: 5,
    title: "Serverless Architecture Patterns",
    slug: "serverless-architecture-patterns",
    excerpt:
      "Discover the most effective serverless patterns and how to implement them in your next project.",
    category: "Backend",
    readTime: "11 min read",
    date: "February 10, 2025",
    author: "Lisa Johnson",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <section>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Featured Articles
          </h2>
          <p className="text-gray-600">
            Explore the latest in web development, AI, and technology.
          </p>
        </section>

        <div className="w-80">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0">
              <div
                id="boost-ad-container"
                className="boost-ad-container h-60 rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card key={blog.id} className="flex flex-col">
            <CardHeader className="space-y-2">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={`/images/next.png`}
                  alt={blog.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="mb-2">
                  {blog.category}
                </Badge>
                <span className="text-sm text-gray-500">{blog.readTime}</span>
              </div>
              <CardTitle className="text-xl">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {blog.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link
                href={`/blog/${blog.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

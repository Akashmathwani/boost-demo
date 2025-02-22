import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogContent } from "@/app/types/blog";

const blogContent: BlogContent = {
  "future-of-web-development-nextjs-15": {
    title: "The Future of Web Development with Next.js 15",
    content: `
    Next.js 15 represents a significant leap forward in web development, introducing groundbreaking features that streamline the development process while enhancing performance and user experience.

    ## Server Components Revolution

    One of the most significant changes in Next.js 15 is the enhanced implementation of React Server Components. This feature fundamentally changes how we think about component architecture:

    - **Improved Performance**: Server Components reduce the JavaScript bundle size by keeping certain components server-side.
    - **Better SEO**: Enhanced server-side rendering capabilities make your content more discoverable.
    - **Simplified Data Fetching**: Direct database queries from server components without API routes.

    ## The New App Router

    The App Router represents a paradigm shift in how we structure Next.js applications:

    - **Nested Layouts**: Create more complex UIs with less code
    - **Route Groups**: Better organization of your application's pages
    - **Error Handling**: More granular control over error boundaries
    
    ## Enhanced Development Experience

    Next.js 15 brings several improvements to the development workflow:

    - **Fast Refresh**: Even faster hot reloading
    - **Better Error Messages**: More detailed and helpful error reporting
    - **TypeScript Integration**: Enhanced type safety and better IDE support

    ## Performance Optimizations

    Performance remains a top priority with several new optimizations:

    - **Improved Image Component**: Better image optimization and loading strategies
    - **Font Optimization**: Enhanced font loading and display
    - **Static and Dynamic Rendering**: More flexible rendering patterns

    ## Getting Started

    To start using Next.js 15, you can create a new project using:

    \`\`\`bash
    npx create-next-app@latest my-app
    \`\`\`

    The new setup process will guide you through configuring your project with the latest features and best practices.
    `,
    category: "Framework",
    readTime: "8 min read",
    date: "February 20, 2025",
    author: "Sarah Chen",
    sections: [
      {
        title: "Server Components Revolution",
        image: `/images/next.png`,
      },
      {
        title: "Enhanced Development Experience",
        image: `/images/ai.jpeg`,
      },
    ],
  },
  "building-ai-powered-applications": {
    title: "Building AI-Powered Applications",
    content: `
    Artificial Intelligence is revolutionizing web development, enabling developers to create more intelligent and responsive applications. Let's explore how to integrate AI capabilities into your web applications.

    ## Understanding AI Integration

    Modern AI integration typically involves:
    - API-based services
    - Local machine learning models
    - Hybrid approaches

    ## Popular AI Services

    Several services make AI integration straightforward:
    - OpenAI's GPT models
    - Google's Cloud AI
    - Azure Cognitive Services

    ## Implementation Strategies

    When implementing AI in your applications, consider:
    - Model selection
    - Data privacy
    - Cost optimization
    - Performance implications

    ## Best Practices

    Follow these best practices for AI integration:
    - Cache responses when possible
    - Implement proper error handling
    - Monitor usage and costs
    - Provide fallback options
    `,
    category: "Artificial Intelligence",
    readTime: "12 min read",
    date: "February 18, 2025",
    author: "Michael Rodriguez",
    sections: [
      {
        title: "AI Integration Architecture",
        image: `/images/ai.jpeg`,
      },
    ],
  },
  // ... similar detailed content for other blog posts
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogPost({ params }: { params: any }) {
  const { slug } = params;

  if (!blogContent[slug]) {
    notFound();
  }

  const post = blogContent[slug];

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
      >
        ← Back to articles
      </Link>

      <article>
        <div className="relative w-full h-96 mb-8">
          <Image
            src="/images/next.png"
            alt={post.title}
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>

        <Card>
          <CardHeader className="space-y-4">
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>
            <CardTitle className="text-4xl">{post.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </CardHeader>

          {/* Ad Container */}

          <div className="mb-8">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div
                  id="boost-ad-container"
                  className="boost-ad-container h-64 rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          <CardContent>
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace("##", "").trim()}
                    </h2>
                  );
                }
                if (paragraph.startsWith("-")) {
                  return (
                    <li key={index} className="ml-4">
                      {paragraph.replace("-", "").trim()}
                    </li>
                  );
                }
                if (paragraph.trim().startsWith("```")) {
                  return (
                    <pre
                      key={index}
                      className="bg-gray-100 p-4 rounded-lg overflow-x-auto"
                    >
                      <code>{paragraph.split("```")[1].split("```")[0]}</code>
                    </pre>
                  );
                }
                return (
                  paragraph.trim() && (
                    <p key={index} className="mb-4">
                      {paragraph.trim()}
                    </p>
                  )
                );
              })}
            </div>

            {post.sections?.map((section, index) => (
              <div key={index} className="mt-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div className="relative w-full h-72 mb-6">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </article>
    </div>
  );
}

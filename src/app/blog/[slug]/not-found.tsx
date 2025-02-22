import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Blog Post Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            The article youre looking for doesnt exist or has been moved.
          </p>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Return to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const upcomingPosts = [
    {
      title: "Building Scalable ETL Pipelines with AWS Glue",
      category: "Data Engineering",
      description: "A comprehensive guide to designing and implementing robust ETL pipelines using AWS Glue and PySpark.",
      estimatedDate: "Coming Soon"
    },
    {
      title: "Data Quality Patterns in Modern Architectures",
      category: "Best Practices",
      description: "Exploring proven patterns and techniques for maintaining high data quality in large-scale systems.",
      estimatedDate: "Coming Soon"
    },
    {
      title: "Optimizing Redshift Performance: Lessons Learned",
      category: "Performance",
      description: "Real-world strategies for improving query performance and reducing costs in Amazon Redshift.",
      estimatedDate: "Coming Soon"
    },
    {
      title: "From Monolith to Microservices: A Data Perspective",
      category: "Architecture",
      description: "How to approach data architecture when transitioning from monolithic to microservices architecture.",
      estimatedDate: "Coming Soon"
    }
  ];

  const categories = [
    { name: "Data Engineering", count: 5, color: "blue" },
    { name: "Cloud Architecture", count: 3, color: "red" },
    { name: "Best Practices", count: 4, color: "blue" },
    { name: "Performance", count: 2, color: "red" },
    { name: "Career Tips", count: 3, color: "blue" }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Data Engineering <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on data engineering, cloud architecture, and building scalable data systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Coming Soon Notice */}
            <Card className="mb-8 bg-gradient-to-r from-blue-50 to-red-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Blog Coming Soon! 🚀
                  </h2>
                  <p className="text-gray-700 mb-6">
                    I'm currently working on creating valuable content about data engineering, 
                    cloud architecture, and best practices. Check back soon for insightful articles 
                    and tutorials based on real-world experience.
                  </p>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Notified When I Publish
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Posts */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Upcoming <span className="text-red-500">Articles</span>
              </h2>
              
              {upcomingPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge 
                            variant="outline" 
                            className={`${
                              post.category === 'Data Engineering' || post.category === 'Best Practices' || post.category === 'Architecture'
                                ? 'border-blue-200 text-blue-700' 
                                : 'border-red-200 text-red-700'
                            }`}
                          >
                            {post.category}
                          </Badge>
                          <span className="text-sm text-gray-500">{post.estimatedDate}</span>
                        </div>
                        <CardTitle className="text-xl text-gray-900 mb-2">
                          {post.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{post.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Get notified when I publish new articles about data engineering and cloud architecture.
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-500">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{category.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`${
                          category.color === 'blue' 
                            ? 'border-blue-200 text-blue-700' 
                            : 'border-red-200 text-red-700'
                        }`}
                      >
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Topics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Popular Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {['AWS Glue', 'Data Quality', 'ETL Optimization', 'Cloud Migration', 'PySpark'].map((topic, index) => (
                      <div key={index} className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                        #{topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gray-900 text-white">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">
                Have a Topic Suggestion?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                I'd love to hear what data engineering topics you'd like me to write about.
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => window.location.href = '/contact'}
              >
                Suggest a Topic
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;

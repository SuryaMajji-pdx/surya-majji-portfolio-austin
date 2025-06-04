import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const featuredProject = {
    title: "Lifestance Health - Data Pipeline Optimization",
    company: "Lifestance Health",
    description: "Comprehensive ETL pipeline development and optimization project focusing on data quality and analytics reliability.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["AWS Glue", "PySpark", "Redshift", "Python", "SQL", "Dimensional Modeling"],
    achievements: [
      "Extracted data from multiple sources and applied complex transformations",
      "Used AWS Glue with PySpark to transform and load data into Redshift",
      "Improved data quality via ETL validation, boosting analytics reliability",
      "Applied dimensional modeling (Star/Snowflake Schema) with SCD fact/dimension tables",
      "Reduced data processing time by 60% through optimization",
      "Enhanced data governance and quality assurance processes"
    ]
  };

  const otherProjects = [
    {
      title: "Real-time Analytics Dashboard",
      description: "Built a real-time data streaming solution using Apache Kafka and AWS Lambda for instant insights.",
      technologies: ["Apache Kafka", "AWS Lambda", "DynamoDB", "React", "D3.js"],
      status: "Production"
    },
    {
      title: "Multi-Cloud Data Migration",
      description: "Led the migration of legacy data infrastructure from on-premises to multi-cloud architecture.",
      technologies: ["AWS", "Azure", "Terraform", "Docker", "Apache Airflow"],
      status: "Completed"
    },
    {
      title: "ML Data Pipeline",
      description: "Designed and implemented automated ML data pipeline for predictive analytics.",
      technologies: ["Python", "Apache Spark", "MLflow", "AWS SageMaker"],
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of my key data engineering projects that demonstrate expertise in cloud architecture, ETL optimization, and data analytics.
          </p>
        </div>

        {/* Featured Project */}
        <Card className="mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img 
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white">Featured Project</Badge>
              </div>
            </div>
            
            <div className="p-8">
              <CardHeader className="p-0 mb-6">
                <div className="text-sm text-red-500 font-medium mb-2">{featuredProject.company}</div>
                <CardTitle className="text-2xl lg:text-3xl text-gray-900 mb-4">
                  {featuredProject.title}
                </CardTitle>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {featuredProject.description}
                </p>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <div className="space-y-2">
                    {featuredProject.achievements.slice(0, 4).map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="border-blue-200 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>

        {/* Other Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other <span className="text-red-500">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className={project.status === 'Production' ? 'border-green-200 text-green-700' : 
                               project.status === 'Completed' ? 'border-blue-200 text-blue-700' : 
                               'border-orange-200 text-orange-700'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Section */}
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 text-center">
          <Github className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore More on GitHub
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Check out my GitHub profile for more projects, code samples, and contributions.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
            onClick={() => window.open('https://github.com/SuryaMajji-pdx', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            Visit GitHub Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

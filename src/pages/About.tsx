
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const About = () => {
  const achievements = [
    "Employee of the Month, February 2018 at Innova Solutions",
    "Successfully migrated multiple enterprise data systems to cloud",
    "Improved data processing efficiency by 40% through ETL optimization",
    "Led data architecture design for high-volume analytics platforms"
  ];

  const expertise = [
    "Data Architecture Design",
    "ETL/ELT Pipeline Development",
    "Cloud Migration & Optimization",
    "Data Quality & Governance",
    "Performance Tuning",
    "Team Leadership"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about transforming raw data into actionable insights through innovative engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Experienced Data Engineer specializing in designing scalable, cost-effective data architectures 
                  and optimizing ETL workflows in cloud ecosystems (Azure, AWS). Proficient in Apache Spark, 
                  Hadoop, SQL, Python, and data visualization tools like Tableau/Power BI.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Skilled in workflow automation using Apache Airflow, and proficient in AWS technologies 
                  including Step Functions, Lambda Functions, and Glue Jobs for efficient data processing. 
                  Proven ability to enhance data quality, governance, and processing efficiency, managing 
                  large-scale databases while delivering impactful cloud-based data solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-red-500">Areas of Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {expertise.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="p-2 text-center justify-center border-blue-200 text-blue-700"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">Key Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            I'm always interested in challenging data engineering projects and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to ="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get In Touch </Link>
            <a 
              href="/resume" 
              className="border border-red-400 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors font-medium"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

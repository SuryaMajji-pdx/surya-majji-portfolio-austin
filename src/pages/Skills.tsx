
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "blue",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 98 },
        { name: "JavaScript", level: 75 },
        { name: "Scala", level: 70 }
      ]
    },
    {
      title: "Cloud Platforms",
      color: "red",
      skills: [
        { name: "AWS", level: 92 },
        { name: "Azure", level: 85 },
        { name: "Google Cloud", level: 70 }
      ]
    },
    {
      title: "Big Data Technologies",
      color: "blue",
      skills: [
        { name: "Apache Spark", level: 90 },
        { name: "Hadoop", level: 85 },
        { name: "Apache Kafka", level: 80 },
        { name: "Apache Airflow", level: 88 }
      ]
    },
    {
      title: "Databases",
      color: "red",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "Amazon Redshift", level: 92 },
        { name: "MongoDB", level: 75 },
        { name: "Snowflake", level: 85 }
      ]
    },
    {
      title: "Data Visualization",
      color: "blue",
      skills: [
        { name: "Tableau", level: 85 },
        { name: "Power BI", level: 88 },
        { name: "Matplotlib", level: 80 },
        { name: "Plotly", level: 75 }
      ]
    },
    {
      title: "DevOps & Tools",
      color: "red",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "Jenkins", level: 75 },
        { name: "Terraform", level: 70 }
      ]
    }
  ];

  const awsServices = [
    "AWS Glue", "Lambda Functions", "Step Functions", "S3", "EC2", "RDS",
    "Redshift", "EMR", "CloudFormation", "IAM", "VPC", "CloudWatch"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="text-blue-600">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise in data engineering, cloud computing, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className={`text-xl ${category.color === 'blue' ? 'text-blue-600' : 'text-red-500'}`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className={`h-2 ${category.color === 'blue' ? 'bg-blue-100' : 'bg-red-100'}`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">AWS Services Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Proficient in a wide range of AWS services for building robust data engineering solutions:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {awsServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-red-50 border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700"
                >
                  {service}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-gray-600">Years of Experience</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-red-500 mb-2">20+</div>
              <p className="text-gray-600">Technologies Mastered</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">Projects Completed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;

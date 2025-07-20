
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Github } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const handleDownload = () => {
    // Create a temporary link to download a sample PDF
    // In a real application, you would link to an actual PDF file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual PDF URL
    link.download = 'Surya_Majji_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // For now, show an alert since we don't have an actual PDF
    alert('Resume download would start here. Please upload your actual PDF resume file.');
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Resume</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Download my complete resume or view the highlights below.
          </p>
          <Button 
            size="lg" 
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </Button>
        </div>

        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Surya Majji</h1>
              <h2 className="text-xl text-blue-600 mb-4">Data Engineer</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>smajjipdx.de@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞 +1 971-396-8897</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍 Austin, Texas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <a href="https://github.com/SuryaMajji-pdx" className="text-blue-600 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Experienced Data Engineer specializing in designing scalable, cost-effective data architectures 
              and optimizing ETL workflows in cloud ecosystems (Azure, AWS). Proficient in Apache Spark, 
              Hadoop, SQL, Python, and data visualization tools like Tableau/Power BI. Skilled in workflow 
              automation using Apache Airflow, and proficient in AWS technologies including Step Functions, 
              Lambda Functions, and Glue Jobs for efficient data processing. Proven ability to enhance data 
              quality, governance, and processing efficiency, managing large-scale databases while delivering 
              impactful cloud-based data solutions.
            </p>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Programming Languages:</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'JavaScript', 'Scala'].map((skill) => (
                  <Badge key={skill} variant="outline" className="border-blue-200 text-blue-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud Platforms:</h4>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Azure', 'Google Cloud'].map((skill) => (
                  <Badge key={skill} variant="outline" className="border-red-200 text-red-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Big Data & Analytics:</h4>
              <div className="flex flex-wrap gap-2">
                {['Apache Spark', 'Hadoop', 'Apache Kafka', 'Apache Airflow', 'Tableau', 'Power BI'].map((skill) => (
                  <Badge key={skill} variant="outline" className="border-blue-200 text-blue-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">AWS Services:</h4>
              <div className="flex flex-wrap gap-2">
                {['Glue', 'Lambda', 'Step Functions', 'Redshift', 'S3', 'EC2', 'EMR'].map((skill) => (
                  <Badge key={skill} variant="outline" className="border-red-200 text-red-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Experience */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">Data Engineer</h3>
              <h4 className="text-lg text-red-500 mb-2">Lifestance Health</h4>
              <div className="space-y-2 text-gray-700">
                <p>• Extracted data from multiple sources, applied transformations, and loaded clean data into destinations</p>
                <p>• Used AWS Glue with PySpark to transform and load data into Redshift</p>
                <p>• Improved data quality via ETL validation, boosting analytics reliability</p>
                <p>• Applied dimensional modeling (Star/Snowflake Schema) with SCD fact/dimension tables</p>
                <p>• Reduced data processing time by 60% through pipeline optimization</p>
              </div>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">Senior Data Engineer</h3>
              <h4 className="text-lg text-blue-600 mb-2">Previous Companies</h4>
              <div className="space-y-2 text-gray-700">
                <p>• Designed and implemented scalable data architectures for enterprise clients</p>
                <p>• Led migration projects from on-premises to cloud-based solutions</p>
                <p>• Mentored junior engineers and established best practices for data governance</p>
                <p>• Collaborated with cross-functional teams to deliver data-driven insights</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications & Awards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500">Certifications & Awards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">
                  <strong>Employee of the Month</strong> - February 2018, Innova Solutions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">AWS Certified Solutions Architect</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">AWS Certified Data Engineer</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mr-4"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => navigate("/contact")}
            className="border-red-400 text-red-600 hover:bg-red-50 px-8 py-3"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resume;

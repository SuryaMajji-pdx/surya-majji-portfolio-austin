
# Surya Majji - Data Engineer Portfolio

A modern, responsive portfolio website for Surya Majji, a Data Engineer specializing in scalable data architectures and cloud ecosystems.

## 🚀 Features

- **Multi-page Navigation**: Home, About, Skills, Projects, Resume, Contact, and Blog sections
- **Responsive Design**: Optimized for all devices and screen sizes
- **Professional Theme**: Clean light theme with blue and red accent colors
- **Contact Form**: Functional contact form with validation
- **Resume Download**: PDF resume download functionality
- **GitHub Integration**: Links to GitHub profile and projects
- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **UI Components**: Shadcn/ui component library
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: Sonner for toast notifications

## 📱 Sections Overview

### Home
- Hero section with professional introduction
- Quick stats and achievements
- Call-to-action buttons

### About
- Professional summary
- Areas of expertise
- Key achievements and certifications

### Skills
- Technical skills with proficiency levels
- Categorized by technology type
- AWS services expertise showcase

### Projects
- Featured project: Lifestance Health data pipeline
- Additional projects portfolio
- GitHub profile integration

### Resume
- Downloadable PDF resume
- Complete professional information
- Contact details and certifications

### Contact
- Contact form with validation
- Direct contact information
- Social media links

### Blog
- Upcoming articles section
- Categories and topics
- Newsletter subscription (coming soon)

## 🎨 Design Features

- **Color Scheme**: Light theme with blue (#3B82F6) and red (#EF4444) accents
- **Typography**: Inter font family for modern, professional look
- **Animations**: Smooth transitions and hover effects
- **Cards**: Clean card-based layout for content organization
- **Gradients**: Subtle gradients for visual appeal

## 📧 Contact Information

- **Email**: smajjipdx.de@gmail.com
- **Phone**: +1 971-396-8897
- **Location**: Austin, Texas
- **GitHub**: https://github.com/SuryaMajji-pdx

## 🚀 Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd surya-majji-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:8080`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment Options

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Custom Domain (suryamajji.com)
1. Deploy to your preferred hosting service (Netlify, Vercel, etc.)
2. Configure DNS settings to point to your hosting provider
3. Update any necessary environment variables

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on each push

## 📋 Customization

### Adding Your Resume PDF
1. Add your PDF file to the `public` folder
2. Update the download link in `src/pages/Resume.tsx`
3. Replace the alert with actual PDF download functionality

### Updating Contact Information
- Modify contact details in `src/pages/Contact.tsx`
- Update footer information in `src/components/Footer.tsx`

### Adding Blog Posts
- Create blog post components in `src/components/blog/`
- Update the `src/pages/Blog.tsx` with actual content
- Implement blog post routing and data management

## 🤝 Contributing

This is a personal portfolio website. If you find any bugs or have suggestions for improvements, please feel free to reach out.

## 📄 License

This project is private and intended for personal use by Surya Majji. Please respect intellectual property rights.

---

**Built with ❤️ by Surya Majji**

*Data Engineer specializing in scalable, cost-effective data architectures*

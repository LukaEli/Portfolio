# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a contact form with EmailJS integration.

## 🚀 Features

- Responsive design that works on all devices
- Interactive contact form with EmailJS integration
- Modern UI with smooth animations
- Custom components and sections
- Clean and maintainable code structure

## 🛠️ Technologies Used

- React.js
- Vite
- EmailJS for form handling
- Tailwind CSS for styling
- Custom CSS animations

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Navigate to the project directory:

```bash
cd portfolio-website
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/     # Reusable components
├── sections/       # Main page sections
├── styles/         # Global styles
└── assets/         # Images and other static files
```

## 🎨 Customization

- Update personal information in the respective components
- Modify the color scheme in the Tailwind configuration
- Add or remove sections as needed
- Customize animations and transitions

## 📝 Contact Form Setup

The contact form uses EmailJS for handling form submissions. To set up:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Get your service ID, template ID, and public key
4. Add them to your `.env` file

## 🚀 Deployment

The website can be deployed to various platforms:

- Vercel
- Netlify
- GitHub Pages

Example deployment command for Vercel:

```bash
vercel
```

## 👤 Author

Your Name

- Website: [https://lukaelizbarashvili.netlify.app/](https://lukaelizbarashvili.netlify.app/)
- GitHub: [LukaEli](https://github.com/LukaEli)
- LinkedIn: [Luka Elizbarashvili](https://www.linkedin.com/in/luka-elizbarashvili-22b58826b/)

## 🙏 Acknowledgments

- Thanks to all the open-source libraries and tools used in this project
- Special thanks to the React and Vite communities

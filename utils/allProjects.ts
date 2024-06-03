import mockUpMovieWish from "@/assets/mockup-moviewish.jpg";
import mockUpMessageApp from "@/assets/mockup-messageapp.jpg";
import mockUpXClone from "@/assets/mockup-xclone.jpg";
import mockUpPmg from "@/assets/mockup-pmg.jpg";

export const allProjects = [
  {
    image: mockUpPmg,
    title: "PMG Solutions & Development",
    description:
      "Developed a professional website for a consulting firm specializing in SAP solutions. The site comprises four main pages: Home, About, Services, and Contact. This project was focused on creating a user-friendly and informative platform to highlight the company's expertise and services in the SAP domain.",
    tech: "React, JavaScript, TypeScript, TailwindCSS",
    preview: "https://pmg-solutions.es",
    code: "https://github.com/beMimg/PMG",
  },
  {
    image: mockUpXClone,
    title: "X Clone",
    description:
      "X Clone is a social media platform inspired by X, designed to foster social interactions and sharing within a community. It offers a dynamic environment for posting text and images, following other users, liking posts, and leaving comments. With comprehensive profile management features, users can easily track their likes, posts, follows, and followers",
    tech: "React, JavaScript, TailwindCSS, Node.js, Express.js, MongoDB, Passport.js, Cloudinary",
    preview: "https://x-clone-bemimg.netlify.app",
    code: "https://github.com/beMimg/x-clone-frontend",
  },
  {
    image: mockUpMessageApp,
    title: "Message App",
    description:
      "Messaging App is a social media platform inspired by WhatsApp, offering seamless messaging, interactions, and follow/unfollow features. It includes message status verification and comprehensive user profile viewing capabilities.",
    tech: "React, JavaScript, TailwindCSS, Node.js, Express.js, MongoDB, Passport.js, Multer",
    preview: "https://messagingbemimg.netlify.app/",
    code: "https://github.com/beMimg/messaging-app-frontend",
  },
  {
    image: mockUpMovieWish,
    title: "Movie Wish",
    description:
      "Movie platform for search, detailed viewing, trailer watching where users can browse trending movies and search titles by category, Includes an integrated wish list with localStorage for persistance.",
    tech: "React, JavaScript, TailwindCSS",
    preview: "https://friendly-starburst-6e15fd.netlify.app/",
    code: "https://github.com/beMimg/movie-wish",
  },
];

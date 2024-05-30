import mockup from "@/assets/smartmockups_lwpbprcx.png";
import xClone from "@/assets/x-clone.png";
import messageApp from "@/assets/message-app.png";
import movieWish from "@/assets/movie-wish.png";
import pmg from "@/assets/pmg.png";

export const projects = [
  {
    image: xClone,
    title: "X Clone",
    description:
      "X Clone is a social media platform inspired by X, designed to foster social interactions and sharing within a community. Dynamic platform for text/image posts, follows, likes, and comments. Profile management: trackslikes, posts, follows, and followers.",
    tech: "React, JavaScript, TailwindCSS, Node.js, Express.js, MongoDB, Passport.js, Cloudinary",
    preview: "https://x-clone-bemimg.netlify.app",
    code: "https://github.com/beMimg/x-clone-frontend",
  },
  {
    image: messageApp,
    title: "Message App",
    description:
      "Messaging App is a social media platform inspired by WhatsApp, offering seamless messaging, interactions, and follow/unfollow features. It includes message status verification and comprehensive user profile viewing capabilities.",
    tech: "React, JavaScript, TailwindCSS, Node.js, Express.js, MongoDB, Passport.js, Multer",
    preview: "https://messagingbemimg.netlify.app/",
    code: "https://github.com/beMimg/messaging-app-frontend",
  },
  {
    image: movieWish,
    title: "Movie Wish",
    description:
      "Movie platform for search, detailed viewing, trailer watching where users can browse trending movies and search titles by category, Includes an integrated wish list with localStorage for persistance.",
    tech: "React, JavaScript, TailwindCSS",
    preview: "https://friendly-starburst-6e15fd.netlify.app/",
    code: "https://github.com/beMimg/movie-wish",
  },
];

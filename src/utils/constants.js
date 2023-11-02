import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  // { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  // { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" },
  // { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Internet of Things",
    icon: FcElectronics,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  // {
  //   name: "Python",
  //   icon: FaPython,
  // },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  // {
  //   name: "NodeJs",
  //   icon: FaNodeJs,
  // },
  // {
  //   name: "PugJs",
  //   icon: SiPug,
  // },
  // {
  //   name: "Express",
  //   icon: SiExpress,
  // },
  // {
  //   name: "Docker",
  //   icon: FaDocker,
  // },
  // {
  //   name: "Postgres",
  //   icon: BiLogoPostgresql,
  // },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  // {
  //   name: "Bash",
  //   icon: SiGnubash,
  // },
  // {
  //   name: "Markdown",
  //   icon: BsMarkdown,
  // },
];

export const workData = [
  {
    company: "Falcon It Consultion",
    designation: "Front_End_Developer Wordpress_developer ",
    duration: "Feb 2022 - Present",
    // companyImg: "falconlogo.svg",
    description: (
      <>
        <ul>
          <li>
            Integrated third-party libraries and APIs for enhanced functionality
            and features.
          </li>
          <li>
            Developed interactive and responsive user interfaces using React.js
            for web applications. Collaborated with designers and backend
            developers to translate design concepts and API endpoints into
            functional components.
          </li>
          <li>
            Stayed up-to-date with the latest React.js developments and best
            practices
          </li>
          <li>
            Proficient in React.js, JSX, and the latest ECMAScript features.
            Strong understanding of component-based architecture and React
            lifecycle. Experience with state management libraries like Redux or
            React Context. Knowledge of asynchronous programming using promises,
            async/await, or middleware. Familiarity with modern frontend build
            tools like Webpack and Babel. Proficiency in responsive web design
            and CSS frameworks like Bootstrap or Material-UI. Version control
            using Git and GitHub for collaborative development. Familiarity with
            unit testing and debugging tools for React applications. Strong
            problem-solving skills and ability to work in an agile development
            environment.
          </li>
          <li>Wordpress_developer</li>
          <li>
            Customized and developed WordPress themes and plugins to meet client
            requirements. Collaborated with clients and stakeholders to gather
            project specifications and requirements. Created and maintained
            WordPress websites, ensuring their functionality and security.
            Implemented custom post types, taxonomies, and custom fields to
            extend WordPress core functionality. Worked on front-end
            development, optimizing website design and user experience.
            Integrated e-commerce solutions, payment gateways, and other
            third-party APIs. Managed website performance, speed, and SEO
            optimization for improved search engine rankings.
          </li>
          <li>
            Skills: Proficiency in PHP, HTML, CSS, JavaScript, and MySQL. Strong
            knowledge of WordPress core, themes, and plugin development.
            Familiarity with WordPress REST API and custom REST endpoints.
            Experience with popular page builders, such as Elementor or
            WPBakery. Knowledge of security best practices and experience in
            hardening WordPress installations. SEO optimization techniques and
            tools for improved search engine rankings. Version control using Git
            for collaborative development. Problem-solving skills and ability to
            troubleshoot WordPress-related issues. Excellent communication and
            client interaction skills for understanding and meeting project
            requirements.
          </li>
        </ul>
      </>
    ),
  },
];

// export const projectsData = [
//   {
//     type: "WEB-APP",
//     title: "Movie Magnet",
//     image: "movie-magnet",
//     link: "https://movie-magnet-smoky.vercel.app/",
//     source: "https://github.com/vaheedsk36/movie-magnet",
//   },
//   {
//     type: "WEB-APP",
//     title: "Portfolio Website",
//     image: "portfolio-website",
//     link: null,
//     source: "https://github.com/vaheedsk36/portfolio-website-nextjs",
//   },
//   {
//     type: "WEB-APP",
//     title: "Weather App",
//     image: "weather-app",
//     link: "https://vaheedsk36.github.io/weather-app/",
//     source: "https://github.com/vaheedsk36/weather-app",
//   },
//   {
//     type: "WEB-APP",
//     title: "Landing Page",
//     image: "landing-page",
//     link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
//     source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
//   },
//   {
//     type: "WEB-APP",
//     title: "Guess Game",
//     image: "guess-game",
//     link: "https://vaheedsk36.github.io/guess-my-number",
//     source: "https://github.com/vaheedsk36/guess-my-number",
//   },
//   {
//     type: "WEB-APP",
//     title: "Notes App",
//     image: "react-notes-app",
//     link: "https://vaheedsk36.github.io/react-notes-app/",
//     source: "https://github.com/vaheedsk36/react-notes-app",
//   },
//   {
//     type: "WEB-APP",
//     title: "Dice Multiplayer",
//     image: "dice-multiplayer",
//     link: "https://vaheedsk36.github.io/dice-multiplayer",
//     source: "https://github.com/vaheedsk36/dice-multiplayer",
//   },
//   {
//     type: "PROJECT",
//     title: "Snake Game",
//     image: "snake-game",
//     link: "https://vaheedsk36.github.io/Snake-game",
//     source: "",
//   },
//   {
//     type: "PROJECT",
//     title: "Delta Assistant",
//     image: "delta-assistant",
//     link: "",
//     source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
//   },
//   {
//     type: "WEB-APP",
//     title: "Text Utility App",
//     image: "text-utility-app",
//     link: "https://vaheedsk36.github.io/text-utility-app/",
//     source: "https://github.com/vaheedsk36/text-utility-app",
//   },
// ];

export const socialMediaLinks = [
  {
    href: "https://github.com/Abubakar420",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://instagram.com/its_mee_abubakar?igshid=YTQwZjQ0NmI0OA==",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/abubakar-rehman-53439b279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  // {
  //   href: "https://twitter.com/codersk36",
  //   icon: FaTwitter,
  //   backgroundColor: "social.twitter",
  //   hoverColor: "social.twitterHover",
  // },
  // {
  //   href: "https://codersk36.hashnode.dev/",
  //   icon: FaHashnode,
  //   backgroundColor: "social.hashnode",
  //   hoverColor: "social.hashnodeHover",
  // },
];

export const query = `
query GetUserArticles($page: Int = 0) {
  user(username: "vaheed") {
    publication {
      posts(page: $page) {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;

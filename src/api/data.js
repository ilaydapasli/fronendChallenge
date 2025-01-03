import javascript from "../img/skillsimg/js.jpeg";
import react from "../img/skillsimg/react.png";
import redux from "../img/skillsimg/redux2.png";
import node from "../img/skillsimg/node.jpeg";
import vsCode from "../img/skillsimg/vscode.png";
import figma from "../img/skillsimg/figma.jpeg";

import twitter from "../img/socialmedia/twitter.svg";
import codepen from "../img/socialmedia/codepen.svg";
import atsign from "../img/socialmedia/at-sign.svg";
import instagram from "../img/socialmedia/instagram.svg";
import twitter_dark from "../img/socialmedia/twitter-dark.svg";
import codepen_dark from "../img/socialmedia/codepen-dark.svg";
import atsign_dark from "../img/socialmedia/at-sign-dark.svg";
import instagram_dark from "../img/socialmedia/instagram-dark.svg";
import projectimg1 from "../img/project/project1.png";
import projectimg2 from "../img/project/project2.png";
import profileimg from "../img/profile.png";
import github from "../img/button/github.png";
import githubdark from "../img/button/githubdark.png";
import LinkedIn from "../img/button/LinkedIn.png";
import LinkedInDark from "../img/button/LinkedIndark.png";

export const headerData = {
  title: {
    en: "I am a Frontend Developer...",
    tr: "Ben Frontend Developerım",
  },
  description: {
    en: "...who likes to craft solid and scalable frontend products with great user experiences.",
    tr: "Harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı seven biriyim.",
  },
  buttonimg: {
    github,
    githubdark,
    LinkedIn,
    LinkedInDark,
  },
};

export const skillsData = [
  {
    image: javascript,
    text: "JAVASCRIPT",
  },
  {
    image: react,
    text: "REACT",
  },
  {
    image: redux,
    text: "REDUX",
  },
  {
    image: node,
    text: "NODE",
  },
  {
    image: vsCode,
    text: "VSCODE",
  },
  {
    image: figma,
    text: "FIGMA",
  },
];

export const projectData = [
  {
    header: "Workintech",
    description: {
      en: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tr: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
    },
    buttons: ["react", "redux", "vercel"],
    links: [
      { en: "View Site", tr: "Siteye Gözat" },
      { en: "GitHub", tr: "GitHub" },
    ],
    image: projectimg1,
  },
  {
    header: "Journey",
    description: {
      en: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tr: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
    },
    buttons: ["react", "redux", "vercel"],
    links: [
      { en: "View Site", tr: "Siteye Gözat" },
      { en: "GitHub", tr: "GitHub" },
    ],
    image: projectimg2,
  },
];
export const projectsHeader = {
  en: "Projects",
  tr: "Projeler",
};
export const skillsHeader = {
  en: "Skills",
  tr: "Yetenekler",
};
export const footerData = {
  sendme: { en: "Send me a message!", tr: "Bana Ulaşın!" },
  description: {
    en: "Got a question or proposal, or just want to say hello? Go ahead.",
    tr: "Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? İlerleyin.",
  },
  social: [twitter, codepen, atsign, instagram],
  social_dark: [twitter_dark, codepen_dark, atsign_dark, instagram_dark],
};
export const profileData = {
  header: {
    en: "Profile",
    tr: "Profil",
  },
  firstHeader: { en: "Basic Information", tr: "Temel Bilgiler" },
  personal: {
    birthdate: {
      en: "Birthdate",
      tr: "Doğum Tarihi",
    },
    location: {
      en: "Location",
      tr: "İkamet Şehri",
    },
    education: {
      en: "Education",
      tr: "Eğitim Durumu",
    },
    role: {
      en: "Preferred Role",
      tr: "Tercih Ettiği Rol",
    },
  },
  lastHeader: { en: "About Me", tr: "Hakkımda" },
  description1:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
  description2:
    "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
  image: profileimg,
};

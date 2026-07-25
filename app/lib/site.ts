const whatsappMessage = [
  "Hi Joseph, I came from mbuzi.bio.",
  "",
  "I want help with:",
  "- Web platform engineering",
  "- Workflow automation",
  "- DevOps and delivery support",
  "- Improving an existing system",
  "- Planning a technical direction",
  "",
  "My project context is:",
].join("\n");

export const siteConfig = {
  name: "Joseph Mbuzi",
  title: "Joseph Mbuzi | Software Engineer & Systems Engineer",
  description:
    "Joseph Mbuzi is a software engineer at Yamfumu Technologies building healthcare, education, and legal-tech platforms on React, Node.js, and Microsoft Azure, currently learning payment infrastructure.",
  url: "https://mbuzi.bio",
  locale: "en_US",
  image: "/joseph.png",
  email: "josephmbuzi9@gmail.com",
  whatsapp: `https://wa.me/260960707284?text=${encodeURIComponent(
    whatsappMessage,
  )}`,
  location: {
    country: "ZM",
    region: "Lusaka",
  },
  links: {
    github: "https://github.com/josephmbuzi",
    medium: "https://medium.com/@josephmbuzi9",
    quora: "https://www.quora.com/profile/Joseph-Mbuzi-2",
  },
};

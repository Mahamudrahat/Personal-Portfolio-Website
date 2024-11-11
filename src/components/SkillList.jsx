import { SkillCard } from "./SkillCard";

const SkillList = () => {
    const skills = [
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            title: "Python",
            description: "Programming Language",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            title: "Java",
            description: "Programming Language",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            title: "JavaScript",
            description: "Programming Language",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            title: "React",
            description: "JavaScript Framework",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            title: "Vue.js",
            description: "JavaScript Framework",
          },
          {
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg", // Replace with actual Nuxt.js icon if needed
            title: "Nuxt.js",
            description: "Vue.js Framework",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
            title: "Next.js",
            description: "React Framework",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            title: "PHP",
            description: "Programming Language",
          },
         
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            title: "MySQL",
            description: "Database",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            title: "Docker",
            description: "DevOps Tool",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            title: "Linux",
            description: "Operating System",
          },
          {
            icon: "https://logospng.org/download/laravel/logo-laravel-icon-1024.png", 
            title: "Laravel",
            description: "PHP Framework",
          },
          {
            icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
            title: "Tailwind CSS",
            description: "CSS Framework",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            title: "CSS",
            description: "Style Sheet Language",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            title: "HTML",
            description: "Markup Language",
          },
    ];
  
    return (
        <section className="container mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-8 text-orange-900">Skill List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
        </section>
      );
  };
  
  export default SkillList;
  
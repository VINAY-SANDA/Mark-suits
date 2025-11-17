import { FaJava, FaJs, FaPython, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiIntellijidea, SiVercel } from "react-icons/si";
import { ShineBorder } from "@/components/ui/shine-border";
import { VscCode, VscVscode } from "react-icons/vsc";


const Aboutscreen2 = () => {
  const skills = [
    { icon: FaJava, name: "Java", color: "#f89820" },
    { icon: FaPython, name: "Python", color: "#3776ab" },
    { icon: IoLogoHtml5, name: "HTML5", color: "#e34c26" },
    { icon: IoLogoCss3, name: "CSS3", color: "#1572b6" },
    { icon: RiTailwindCssFill, name: "Tailwind", color: "#06b6d4" },
    { icon: FaJs, name: "JavaScript", color: "#f7df1e" },
    { icon: FaReact, name: "React", color: "#61dafb" },
  ];

  const tools = [
    { icon: SiIntellijidea, name: "IntelliJ IDEA", color: "#FE315D" },
    { icon: VscVscode, name: "VS Code", color: "#007ACC" },
    { icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
  ];


  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 pt-2 pb-12 md:pt-4 md:pb-16 gap-16 md:gap-20">
      {/* Professional SkillSet Section */}
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16 text-center">
          Professional<span className="my-text font-bold"> SkillSet</span>
        </h1>
        
        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="relative group w-32 sm:w-36 md:w-40 lg:w-44"
              >
                {/* Shine Border Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-8 md:p-10 aspect-square transition-all duration-300 hover:bg-white/10 hover:scale-105">
                  <ShineBorder
                    shineColor={[skill.color, "#ffffff", skill.color]}
                    duration={15}
                    borderWidth={2}
                  />
                  
                  {/* Icon */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 md:gap-5">
                    <Icon 
                      className="text-6xl md:text-7xl lg:text-8xl transition-all duration-300 group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tools Section */}
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16 text-center">
          Development<span className="my-text font-bold"> Tools</span>
        </h1>
        
        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="relative group w-32 sm:w-36 md:w-40 lg:w-44"
              >
                {/* Shine Border Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-8 md:p-10 aspect-square transition-all duration-300 hover:bg-white/10 hover:scale-105">
                  <ShineBorder
                    shineColor={[tool.color, "#ffffff", tool.color]}
                    duration={15}
                    borderWidth={2}
                  />
                  
                  {/* Icon */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 md:gap-5">
                    <Icon 
                      className="text-6xl md:text-7xl lg:text-8xl transition-all duration-300 group-hover:scale-110" 
                      style={{ color: tool.color }}
                    />
                    <span className="text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors text-center">
                      {tool.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Aboutscreen2;

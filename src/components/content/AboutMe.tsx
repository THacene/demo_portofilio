import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About Me
      </h2>

      <p className="text-base text-gray-400">
        Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, I've been passionate about coding since I was a child.
         I fell in love with programming at a young age, 
         spending countless hours learning, experimenting, 
         and creating small projects. Over the years, this passion has grown into a career as a Web Developer, 
         Backend Developer, and System Security Administrator, where I continue to build innovative solutions and ensure secure,
        efficient systems that solve real-world problems.
      </p>

      <p className="text-base text-gray-400 mt-4">
       As I’ve evolved in my career, I’ve expanded my expertise into areas like advanced web development,
        system Administrator, and cybersecurity, 
        diving deep into designing efficient infrastructures and implementing strong security measures.
         But no matter how much I learn, I always keep that same excitement and curiosity I had as a child,
          exploring new fields and technologies that push the boundaries of what’s possible.
      </p>

      <p className="text-base text-gray-400 mt-4">
        Today, I’m not just focused on building apps and websites; I’m also
        exploring DevOps tools like Docker, Kubernetes, and AWS to optimize and
        scale my projects. I believe in continuous learning and growth, and I’m
        always looking for new challenges that help me expand my skills.
      </p>

      <p className="text-base text-gray-400 mt-4">
        If you’re interested in collaborating on something exciting or need help
        with a project, feel free to reach out. Let’s create something amazing
        together!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;

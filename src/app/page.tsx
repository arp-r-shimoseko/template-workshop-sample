import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { FadeInSection } from "@/components/FadeInSection";

const Home = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <Profile />
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
    </div>
  );
};

export default Home;

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

interface AboutProps {
  language: "EN" | "TH";
}

const About = ({ language }: AboutProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = language === "EN" ? {
    heading: "About Chanmr Company",
    subheading: "Leading the Future of Thai Business",
    description: "For over two decades, Chanmr has been at the forefront of corporate consulting and engineering excellence in Thailand. We combine deep industry expertise with innovative solutions to help organizations navigate complex challenges and achieve sustainable growth.",
    highlights: [
      "20+ years of industry leadership",
      "500+ successful projects delivered",
      "Expert team of certified consultants",
      "ISO 9001:2015 certified operations"
    ]
  } : {
    heading: "เกี่ยวกับบริษัท Chanmr",
    subheading: "นำธุรกิจไทยสู่อนาคต",
    description: "เป็นเวลากว่าสองทศวรรษที่ Chanmr เป็นผู้นำด้านการให้คำปรึกษาองค์กรและความเป็นเลิศทางวิศวกรรมในประเทศไทย เรารวมความเชี่ยวชาญในอุตสาหกรรมเข้ากับโซลูชันที่เป็นนวัตกรรมเพื่อช่วยองค์กรนำทางความท้าทายที่ซับซ้อนและบรรลุการเติบโตอย่างยั่งยืน",
    highlights: [
      "ความเป็นผู้นำในอุตสาหกรรมกว่า 20 ปี",
      "ส่งมอบโครงการที่ประสบความสำเร็จกว่า 500 โครงการ",
      "ทีมผู้เชี่ยวชาญที่ได้รับการรับรอง",
      "การดำเนินงานที่ได้รับการรับรอง ISO 9001:2015"
    ]
  };

  return (
    <section ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-elegant group">
              <img
                src={aboutImage}
                alt="Chanmr Team"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-semibold rounded-full text-sm">
                {content.subheading}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {content.heading}
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {content.description}
            </p>

            <div className="space-y-4">
              {content.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

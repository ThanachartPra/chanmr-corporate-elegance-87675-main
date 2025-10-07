import { useEffect, useRef, useState } from "react";
import { Briefcase, TrendingUp, Cpu, Shield, Users, Zap } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 group cursor-pointer border border-border ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-gradient-primary transition-all duration-300">
        <div className="text-primary group-hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

interface ServicesProps {
  language: "EN" | "TH";
}

const Services = ({ language }: ServicesProps) => {
  const services = language === "EN" ? [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Strategic Consulting",
      description: "Navigate complex business challenges with data-driven insights and proven methodologies.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Optimization",
      description: "Maximize efficiency and profitability through streamlined processes and smart automation.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IT Infrastructure",
      description: "Build robust, scalable technology foundations that support your growth ambitions.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Protect your assets with comprehensive security frameworks and compliance strategies.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Change Management",
      description: "Lead successful transformations with expert guidance in organizational change.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Innovation",
      description: "Accelerate time-to-market with agile development and innovative solutions.",
    },
  ] : [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "ที่ปรึกษาเชิงกลยุทธ์",
      description: "นำทางความท้าทายทางธุรกิจที่ซับซ้อนด้วยข้อมูลเชิงลึกและวิธีการที่พิสูจน์แล้ว",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "การเพิ่มประสิทธิภาพธุรกิจ",
      description: "เพิ่มประสิทธิภาพและผลกำไรสูงสุดผ่านกระบวนการที่คล่องตัวและระบบอัตโนมัติอัจฉริยะ",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "โครงสร้างพื้นฐานไอที",
      description: "สร้างฐานรากเทคโนโลยีที่แข็งแกร่งและขยายได้ที่สนับสนุนความทะเยอทะยานของคุณ",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "การจัดการความเสี่ยง",
      description: "ปกป้องสินทรัพย์ของคุณด้วยกรอบความปลอดภัยและกลยุทธ์การปฏิบัติตามข้อกำหนด",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "การจัดการการเปลี่ยนแปลง",
      description: "นำการเปลี่ยนแปลงที่ประสบความสำเร็จด้วยคำแนะนำจากผู้เชี่ยวชาญ",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "นวัตกรรมอย่างรวดเร็ว",
      description: "เร่งเวลาสู่ตลาดด้วยการพัฒนาแบบคล่องตัวและโซลูชันที่เป็นนวัตกรรม",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === "EN" ? "Our Services" : "บริการของเรา"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "EN"
              ? "Comprehensive solutions designed to transform your business and achieve sustainable success"
              : "โซลูชันที่ครอบคลุมออกแบบมาเพื่อเปลี่ยนแปลงธุรกิจและบรรลุความสำเร็จอย่างยั่งยืน"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

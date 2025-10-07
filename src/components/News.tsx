import { useEffect, useRef, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  index: number;
}

const NewsCard = ({ title, excerpt, date, category, index }: NewsCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
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
      className={`bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden group cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="h-48 bg-gradient-primary group-hover:scale-105 transition-transform duration-500" />
      
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-3">
          <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
            {category}
          </span>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>

        <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed">{excerpt}</p>

        <Button variant="link" className="p-0 h-auto text-primary group/btn">
          Read more
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

interface NewsProps {
  language: "EN" | "TH";
}

const News = ({ language }: NewsProps) => {
  const articles = language === "EN" ? [
    {
      title: "Chanmr Wins Excellence Award for Digital Transformation",
      excerpt: "Recognition for outstanding achievement in helping Thai enterprises modernize their operations through innovative digital solutions.",
      date: "May 15, 2024",
      category: "Awards"
    },
    {
      title: "New Partnership Expands ASEAN Market Presence",
      excerpt: "Strategic collaboration strengthens our regional consulting capabilities and brings world-class expertise to Southeast Asian businesses.",
      date: "April 28, 2024",
      category: "Partnership"
    },
    {
      title: "Sustainability in Thai Manufacturing: A 2024 Outlook",
      excerpt: "Explore key trends and strategies for integrating sustainable practices into manufacturing operations across Thailand.",
      date: "April 12, 2024",
      category: "Insights"
    }
  ] : [
    {
      title: "Chanmr ได้รับรางวัลความเป็นเลิศด้านการเปลี่ยนแปลงดิจิทัล",
      excerpt: "การยอมรับในความสำเร็จที่โดดเด่นในการช่วยองค์กรไทยปรับปรุงการดำเนินงานผ่านโซลูชันดิจิทัลที่เป็นนวัตกรรม",
      date: "15 พฤษภาคม 2567",
      category: "รางวัล"
    },
    {
      title: "ความร่วมมือใหม่ขยายการแสดงตนในตลาดอาเซียน",
      excerpt: "ความร่วมมือเชิงกลยุทธ์เสริมสร้างความสามารถในการให้คำปรึกษาในภูมิภาคและนำความเชี่ยวชาญระดับโลกมาสู่ธุรกิจในเอเชียตะวันออกเฉียงใต้",
      date: "28 เมษายน 2567",
      category: "ความร่วมมือ"
    },
    {
      title: "ความยั่งยืนในการผลิตไทย: มุมมอง 2567",
      excerpt: "สำรวจแนวโน้มและกลยุทธ์หลักในการบูรณาการแนวทางปฏิบัติที่ยั่งยืนในการดำเนินงานการผลิตทั่วประเทศไทย",
      date: "12 เมษายน 2567",
      category: "ข้อมูลเชิงลึก"
    }
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === "EN" ? "Latest News & Insights" : "ข่าวสารและข้อมูลเชิงลึกล่าสุด"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {language === "EN"
              ? "Stay informed with our latest updates, industry insights, and success stories"
              : "รับทราบข้อมูลล่าสุด ข้อมูลเชิงลึกในอุตสาหกรรม และเรื่องราวความสำเร็จของเรา"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <NewsCard key={index} {...article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;


import React, { createContext, useState, useContext, useEffect } from "react";

type Language = "en" | "fa";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "home": "Home",
    "about": "What is Synapse?",
    "features": "Features",
    "useCases": "Use Cases",
    "benefits": "Benefits",
    "process": "Process",
    "pricing": "Pricing",
    "contact": "Contact Us",
    
    // Hero section
    "hero.title": "Let AI Work For You",
    "hero.subtitle": "Advanced AI Assistants Custom-Built for Your Needs",
    "hero.cta": "Start Your Custom Assistant",
    "hero.secondary": "Book a Consultation",
    
    // About section
    "about.title": "What is Synapse?",
    "about.description": "Synapse is a research & development lab focused on creating intelligent, autonomous AI assistants tailored to personal and business needs. It's not just a chatbot—it's an automated, thinking, learning, action-taking digital assistant.",
    "about.point1": "Custom-built AI assistants",
    "about.point2": "Thinking, learning, and taking action autonomously",
    "about.point3": "Seamless integration with your existing workflows",
    
    // Features section
    "features.title": "Core Capabilities",
    "features.subtitle": "Powerful AI Modules to Transform Your Work",
    "features.text": "Synapse combines multiple AI technologies to create assistants that can understand, reason, and take action across various domains.",
    
    "feature1.title": "Smart Text Analysis",
    "feature1.description": "Deep understanding with long-term memory and context retention",
    
    "feature2.title": "Multi-model AI Switching",
    "feature2.description": "Leverages ChatGPT, Gemini, Claude and other models as needed",
    
    "feature3.title": "Advanced Image Understanding",
    "feature3.description": "Extract data, analyze visuals and understand graphics",
    
    "feature4.title": "AI Podcast & Audio Creation",
    "feature4.description": "Including voice cloning and natural speech synthesis",
    
    "feature5.title": "Text-to-Image Generation",
    "feature5.description": "Create graphics, illustrations and visual assets on demand",
    
    "feature6.title": "Task Automation",
    "feature6.description": "Integration with Gmail, Calendar, Trello, Notion and more",
    
    "feature7.title": "Live Web Search",
    "feature7.description": "Access current information with structured result output",
    
    "feature8.title": "Voice Interaction",
    "feature8.description": "Natural conversation with voice input and response",
    
    "feature9.title": "Automation Platform Integration",
    "feature9.description": "Connect with Make, Zapier and other workflow tools",
    
    "feature10.title": "Personalized Plans",
    "feature10.description": "Coaching, study, health, and business planning assistance",
    
    "feature11.title": "White-labeled Assistants",
    "feature11.description": "Resell or offer customized AI to your own clients",
    
    "feature12.title": "Brand-Customized Logic",
    "feature12.description": "Tailored assistant personality matching your brand voice",
    
    // Use Cases
    "useCases.title": "Success Stories",
    "useCases.subtitle": "Real-World Assistants Built with Synapse",
    "useCases.tryIt": "Try it yourself:",
    
    "useCase1.title": "Rafiei Academy Assistant",
    "useCase1.description": "Business & content AI supporting thousands of entrepreneurs",
    "useCase1.prompt": "What's a drop shipping idea?",
    
    "useCase2.title": "Mahtab Coach Assistant",
    "useCase2.description": "Nutrition, fitness and motivation guidance",
    "useCase2.prompt": "Give me a motivational audio",
    
    "useCase3.title": "Ashkan Harrit Assistant",
    "useCase3.description": "Psychology & self-help advisor for personal growth",
    "useCase3.prompt": "Help me with anxiety management",
    
    "useCase4.title": "LadyBoss Assistant",
    "useCase4.description": "Women-led branding & marketing support",
    "useCase4.prompt": "Create a social media plan",
    
    // Benefits
    "benefits.title": "Transform Your Workflow",
    "benefits.subtitle": "Before & After Synapse",
    
    "benefits.before": "Before Synapse",
    "benefits.after": "With Synapse",
    
    "benefit1.title": "Time Investment",
    "benefit1.before": "Hours manually handling repetitive tasks",
    "benefit1.after": "Automated processes saving 15+ hours weekly",
    
    "benefit2.title": "Response Quality",
    "benefit2.before": "Generic AI outputs requiring heavy editing",
    "benefit2.after": "Tailored responses aligned with your expertise",
    
    "benefit3.title": "Personalization",
    "benefit3.before": "One-size-fits-all approach",
    "benefit3.after": "Customized interactions for each user",
    
    "benefit4.title": "Integration",
    "benefit4.before": "Disconnected tools and platforms",
    "benefit4.after": "Seamless workflow across all your systems",
    
    "benefit5.title": "Scalability",
    "benefit5.before": "Limited by human bandwidth",
    "benefit5.after": "Handle thousands of interactions simultaneously",
    
    // Process
    "process.title": "How Synapse Works",
    "process.subtitle": "Your Journey to a Custom AI Assistant",
    
    "process.step1": "Consultation",
    "process.step1.description": "We discuss your goals and requirements",
    
    "process.step2": "Needs Analysis",
    "process.step2.description": "Detailed assessment of your workflow",
    
    "process.step3": "Feature Mapping",
    "process.step3.description": "Selecting the right AI capabilities",
    
    "process.step4": "Custom Dialog & Memory",
    "process.step4.description": "Developing personalized logic",
    
    "process.step5": "Technical Build",
    "process.step5.description": "Construction and testing",
    
    "process.step6": "Platform Integration",
    "process.step6.description": "Connecting to your existing tools",
    
    "process.step7": "Delivery & Training",
    "process.step7.description": "Implementation and team onboarding",
    
    // Pricing
    "pricing.title": "Investment",
    "pricing.subtitle": "Transparent Pricing Structure",
    "pricing.description": "Our pricing is based on the specific requirements of your AI assistant project.",
    
    "pricing.setup": "Setup Fee:",
    "pricing.setupValue": "Depends on project scope and complexity",
    
    "pricing.subscription": "Monthly Subscription:",
    "pricing.subscriptionValue": "Based on usage and premium AI models",
    
    "pricing.custom": "Custom Quote:",
    "pricing.customValue": "Provided after initial consultation",
    
    "pricing.cta": "Get Your Custom Quote",
    
    // Contact
    "contact.title": "Start Your Journey",
    "contact.subtitle": "Book a Consultation or Request More Information",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Your Message",
    "contact.submit": "Submit Request",
    "contact.success": "Your message has been sent successfully!",
    "contact.error": "There was an error sending your message. Please try again.",
    
    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.company": "Rafiei Group",
  },
  fa: {
    // Navigation
    "home": "خانه",
    "about": "سیناپس چیست؟",
    "features": "قابلیت‌ها",
    "useCases": "موارد استفاده",
    "benefits": "مزایا",
    "process": "فرآیند",
    "pricing": "قیمت‌گذاری",
    "contact": "تماس با ما",
    
    // Hero section
    "hero.title": "بگذارید هوش مصنوعی برای شما کار کند",
    "hero.subtitle": "دستیاران هوش مصنوعی پیشرفته، سفارشی‌سازی شده برای نیازهای شما",
    "hero.cta": "دستیار سفارشی خود را بسازید",
    "hero.secondary": "مشاوره رزرو کنید",
    
    // About section
    "about.title": "سیناپس چیست؟",
    "about.description": "سیناپس یک آزمایشگاه تحقیق و توسعه است که بر ساخت دستیاران هوش مصنوعی هوشمند و خودمختار متمرکز شده است. این فقط یک چت‌بات نیست - این یک دستیار دیجیتال خودکار، متفکر و یادگیرنده است.",
    "about.point1": "دستیاران هوش مصنوعی سفارشی",
    "about.point2": "تفکر، یادگیری و اقدام به صورت خودکار",
    "about.point3": "ادغام بی‌نقص با گردش کاری موجود شما",
    
    // Features section
    "features.title": "قابلیت‌های اصلی",
    "features.subtitle": "ماژول‌های قدرتمند هوش مصنوعی برای تحول کار شما",
    "features.text": "سیناپس چندین فناوری هوش مصنوعی را ترکیب می‌کند تا دستیارانی بسازد که می‌توانند در حوزه‌های مختلف درک، استدلال و اقدام کنند.",
    
    "feature1.title": "تحلیل متن هوشمند",
    "feature1.description": "درک عمیق با حافظه طولانی مدت و حفظ زمینه",
    
    "feature2.title": "تعویض چند مدل هوش مصنوعی",
    "feature2.description": "از ChatGPT، Gemini، Claude و سایر مدل‌ها در صورت نیاز استفاده می‌کند",
    
    "feature3.title": "درک پیشرفته تصویر",
    "feature3.description": "استخراج داده‌ها، تحلیل تصاویر و درک گرافیک",
    
    "feature4.title": "ایجاد پادکست و صوت هوش مصنوعی",
    "feature4.description": "شامل شبیه‌سازی صدا و ترکیب گفتار طبیعی",
    
    "feature5.title": "تولید تصویر از متن",
    "feature5.description": "ایجاد گرافیک، تصاویر و دارایی‌های بصری بر اساس تقاضا",
    
    "feature6.title": "خودکارسازی وظایف",
    "feature6.description": "ادغام با Gmail، تقویم، Trello، Notion و بیشتر",
    
    "feature7.title": "جستجوی وب زنده",
    "feature7.description": "دسترسی به اطلاعات فعلی با خروجی نتیجه ساختاریافته",
    
    "feature8.title": "تعامل صوتی",
    "feature8.description": "مکالمه طبیعی با ورودی و پاسخ صوتی",
    
    "feature9.title": "ادغام پلتفرم خودکارسازی",
    "feature9.description": "اتصال به Make، Zapier و سایر ابزارهای گردش کار",
    
    "feature10.title": "برنامه‌های شخصی‌سازی شده",
    "feature10.description": "مربیگری، مطالعه، سلامتی و کمک در برنامه‌ریزی کسب و کار",
    
    "feature11.title": "دستیاران با برند سفید",
    "feature11.description": "فروش مجدد یا ارائه هوش مصنوعی سفارشی به مشتریان خود",
    
    "feature12.title": "منطق سفارشی برند",
    "feature12.description": "شخصیت دستیار متناسب با صدای برند شما",
    
    // Use Cases
    "useCases.title": "داستان‌های موفقیت",
    "useCases.subtitle": "دستیاران واقعی ساخته شده با سیناپس",
    "useCases.tryIt": "خودتان امتحان کنید:",
    
    "useCase1.title": "دستیار آکادمی رفیعی",
    "useCase1.description": "هوش مصنوعی کسب و کار و محتوا که از هزاران کارآفرین پشتیبانی می‌کند",
    "useCase1.prompt": "یک ایده دراپ‌شیپینگ چیست؟",
    
    "useCase2.title": "دستیار مربی مهتاب",
    "useCase2.description": "راهنمایی تغذیه، تناسب اندام و انگیزش",
    "useCase2.prompt": "یک صوت انگیزشی به من بده",
    
    "useCase3.title": "دستیار اشکان هریت",
    "useCase3.description": "مشاور روانشناسی و خودیاری برای رشد شخصی",
    "useCase3.prompt": "در مدیریت اضطراب به من کمک کن",
    
    "useCase4.title": "دستیار لیدی باس",
    "useCase4.description": "پشتیبانی برندسازی و بازاریابی با هدایت زنان",
    "useCase4.prompt": "یک برنامه رسانه اجتماعی ایجاد کن",
    
    // Benefits
    "benefits.title": "گردش کار خود را متحول کنید",
    "benefits.subtitle": "قبل و بعد از سیناپس",
    
    "benefits.before": "قبل از سیناپس",
    "benefits.after": "با سیناپس",
    
    "benefit1.title": "سرمایه‌گذاری زمانی",
    "benefit1.before": "ساعت‌ها انجام دستی کارهای تکراری",
    "benefit1.after": "فرآیندهای خودکار با صرفه‌جویی بیش از 15 ساعت در هفته",
    
    "benefit2.title": "کیفیت پاسخ",
    "benefit2.before": "خروجی‌های عمومی هوش مصنوعی که نیاز به ویرایش زیادی دارند",
    "benefit2.after": "پاسخ‌های سفارشی همسو با تخصص شما",
    
    "benefit3.title": "شخصی‌سازی",
    "benefit3.before": "رویکرد یک‌سایز برای همه",
    "benefit3.after": "تعاملات سفارشی برای هر کاربر",
    
    "benefit4.title": "یکپارچه‌سازی",
    "benefit4.before": "ابزارها و پلتفرم‌های جداگانه",
    "benefit4.after": "گردش کار یکپارچه در تمام سیستم‌های شما",
    
    "benefit5.title": "مقیاس‌پذیری",
    "benefit5.before": "محدود به ظرفیت انسانی",
    "benefit5.after": "مدیریت هزاران تعامل به طور همزمان",
    
    // Process
    "process.title": "سیناپس چگونه کار می‌کند",
    "process.subtitle": "سفر شما به سوی یک دستیار هوش مصنوعی سفارشی",
    
    "process.step1": "مشاوره",
    "process.step1.description": "ما در مورد اهداف و نیازهای شما صحبت می‌کنیم",
    
    "process.step2": "تحلیل نیازها",
    "process.step2.description": "ارزیابی دقیق گردش کار شما",
    
    "process.step3": "نقشه‌برداری ویژگی‌ها",
    "process.step3.description": "انتخاب قابلیت‌های هوش مصنوعی مناسب",
    
    "process.step4": "گفتگو و حافظه سفارشی",
    "process.step4.description": "توسعه منطق شخصی‌سازی شده",
    
    "process.step5": "ساخت فنی",
    "process.step5.description": "ساخت و آزمایش",
    
    "process.step6": "ادغام پلتفرم",
    "process.step6.description": "اتصال به ابزارهای موجود شما",
    
    "process.step7": "تحویل و آموزش",
    "process.step7.description": "پیاده‌سازی و آشنایی تیم",
    
    // Pricing
    "pricing.title": "سرمایه‌گذاری",
    "pricing.subtitle": "ساختار قیمت‌گذاری شفاف",
    "pricing.description": "قیمت‌گذاری ما بر اساس نیازهای خاص پروژه دستیار هوش مصنوعی شما است.",
    
    "pricing.setup": "هزینه راه‌اندازی:",
    "pricing.setupValue": "بستگی به محدوده و پیچیدگی پروژه دارد",
    
    "pricing.subscription": "اشتراک ماهانه:",
    "pricing.subscriptionValue": "بر اساس استفاده و مدل‌های هوش مصنوعی پیشرفته",
    
    "pricing.custom": "قیمت سفارشی:",
    "pricing.customValue": "پس از مشاوره اولیه ارائه می‌شود",
    
    "pricing.cta": "قیمت سفارشی خود را دریافت کنید",
    
    // Contact
    "contact.title": "سفر خود را آغاز کنید",
    "contact.subtitle": "رزرو مشاوره یا درخواست اطلاعات بیشتر",
    "contact.name": "نام کامل",
    "contact.email": "آدرس ایمیل",
    "contact.phone": "شماره تلفن",
    "contact.message": "پیام شما",
    "contact.submit": "ارسال درخواست",
    "contact.success": "پیام شما با موفقیت ارسال شد!",
    "contact.error": "خطایی در ارسال پیام شما رخ داد. لطفا دوباره تلاش کنید.",
    
    // Footer
    "footer.rights": "تمامی حقوق محفوظ است",
    "footer.company": "گروه رفیعی",
  }
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang && (savedLang === "en" || savedLang === "fa")) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

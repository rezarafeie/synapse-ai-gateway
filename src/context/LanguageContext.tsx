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
    "useCases.assistants": "Select an Assistant",
    "useCases.tryIt": "Try it yourself",
    "useCases.typePrompt": "Type your message...",
    "useCases.welcome": "Hi there! I'm {name}. How can I help you today?",
    
    "useCase1.title": "Rafiei Academy Assistant",
    "useCase1.description": "Business & content AI supporting thousands of entrepreneurs",
    "useCase1.prompt": "How do I start an online business?",
    "useCase1.response1": "Let's begin with your interests. I'll suggest 3 models to choose from based on your skills and market opportunities.",
    "useCase1.prompt2": "Give me a dropshipping product idea.",
    "useCase1.response2": "Try a compact travel tripod — it's trending on social media, easy to source from suppliers, and has good profit margins.",
    "useCase1.prompt3": "I feel scattered today.",
    "useCase1.response3": "No worries. Want a 3-step focus reset? Try: 1) Close all tabs except one, 2) Set a 25-minute timer, and 3) Complete one small task.",
    
    "useCase2.title": "Mahtab Coach Assistant",
    "useCase2.description": "Nutrition, fitness and motivation guidance",
    "useCase2.prompt": "What's a healthy lunch that keeps me full?",
    "useCase2.response1": "Grilled chicken, quinoa, and avocado with a side of roasted vegetables. This combination gives you protein, healthy fats, and complex carbs to stay satisfied.",
    "useCase2.prompt2": "Give me a motivational audio",
    "useCase2.response2": "🎧 *Here's a 10-second pep talk to boost your energy. Remember that every small step you take today is building the foundation for your success tomorrow.*",
    "useCase2.prompt3": "Is this food high in calories?",
    "useCase2.response3": "Let me check the photo you've shared — based on what I can see, this meal looks to contain approximately 600 calories, with a good balance of proteins and healthy fats.",
    
    "useCase3.title": "Ashkan Harrit Assistant",
    "useCase3.description": "Psychology & self-help advisor for personal growth",
    "useCase3.prompt": "Help me with anxiety management",
    "useCase3.response1": "Let's pause. I'll guide you through a 90-second grounding exercise: Notice 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
    "useCase3.prompt2": "Summarize the book 'The Compound Effect'.",
    "useCase3.response2": "It's about how small, consistent habits lead to massive results over time. Darren Hardy explains that success doesn't come from radical changes but from daily disciplines that compound.",
    "useCase3.prompt3": "I don't know what I want in life.",
    "useCase3.response3": "That's okay. Want to explore 3 journal prompts together? Try: 1) What did you enjoy as a child? 2) When do you lose track of time? 3) What would you do if you couldn't fail?",
    
    "useCase4.title": "LadyBoss Assistant",
    "useCase4.description": "Women-led branding & marketing support",
    "useCase4.prompt": "How do I start designing my course for women?",
    "useCase4.response1": "Tell me your goal and audience — I'll suggest structure and session titles. For example, if it's a confidence course, we could start with 'Identifying Your Unique Strengths' as module one.",
    "useCase4.prompt2": "Create a social media plan",
    "useCase4.response2": "Here's a weekly framework: Monday - Inspirational quote, Tuesday - Educational tip, Wednesday - Client spotlight, Thursday - Personal story, Friday - Free resource, Weekend - Engagement question.",
    "useCase4.prompt3": "Write a caption about confidence for my IG story",
    "useCase4.response3": "You are not 'too much' — you're exactly enough. Own it. The world needs your authentic voice, not another echo. #OwnYourPower #LadyBossEnergy",
    
    "useCase5.title": "E-Commerce Assistant",
    "useCase5.description": "Product management and customer service",
    "useCase5.prompt": "Help me optimize my product listings",
    "useCase5.response1": "I'll analyze your current listings and suggest improvements for titles, descriptions and images based on marketplace algorithms and customer search patterns.",
    "useCase5.prompt2": "Create a customer follow-up email",
    "useCase5.response2": "Here's a template: 'Thank you for your purchase! We hope you're enjoying your [product]. Would you mind sharing your experience with a quick review? Here's 10% off your next order.'",
    "useCase5.prompt3": "What's a good upselling strategy?",
    "useCase5.response3": "Try the rule of 3: Show a budget option, your target product, and a premium alternative. Most customers gravitate to the middle option when presented this way.",
    
    "useCase6.title": "Personal Assistant",
    "useCase6.description": "Daily tasks and schedule management",
    "useCase6.prompt": "Organize my day for maximum productivity",
    "useCase6.response1": "I've blocked your calendar with focused work sessions in the morning, meetings mid-day, and admin tasks in late afternoon when energy typically dips.",
    "useCase6.prompt2": "Remind me about my appointment",
    "useCase6.response2": "You have a doctor's appointment at 3:30 PM tomorrow. I've added it to your calendar with a 30-minute reminder and included the clinic address.",
    "useCase6.prompt3": "Summarize my emails from today",
    "useCase6.response3": "You received 12 emails: 3 require immediate action (client proposals), 4 are FYI (newsletter updates), and 5 are low priority. The most urgent is from Sarah about tomorrow's presentation.",
    
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
    
    // CTA section
    "cta.title": "Ready to Transform Your Workflow?",
    "cta.subtitle": "Let Synapse build your custom AI assistant to automate tasks, enhance productivity, and scale your operations.",
    "cta.primary": "Get Your Custom Assistant",
    "cta.secondary": "Book a Consultation",
    
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
    
    // Request Page
    "request.title": "Request Your Custom AI Assistant",
    "request.subtitle": "Let us build a tailored AI solution to enhance your workflow and productivity",
    "request.success.title": "Request Submitted Successfully",
    "request.success.message": "Thank you for your interest in Synapse. Our team will review your request and get back to you shortly.",
    "request.success.backHome": "Back to Home",
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
    "feature8.description": "��کالمه طبیعی با ورودی و پاسخ صوتی",
    
    "feature9.title": "ادغام پلتفرم خودکارسازی",
    "feature9.description": "اتصال به Make، Zapier و سایر ا��زارهای گردش کار",
    
    "feature10.title": "برنامه‌های شخصی‌سازی شده",
    "feature10.description": "مربیگری، مطالعه، سلامتی و کمک در برنامه‌ریزی کسب و کار",
    
    "feature11.title": "دستیاران با برند سفید",
    "feature11.description": "فروش مجدد یا ارائه هوش مصنوعی سفارشی به مشتریان خود",
    
    "feature12.title": "منطق سفارشی برند",
    "feature12.description": "شخصیت دستیار متناسب با صدای برند شما",
    
    // Use Cases
    "useCases.title": "داستان‌های موفقیت",
    "useCases.subtitle": "دستیاران واقعی ساخته شده با سیناپس",
    "useCases.assistants": "یک دستیار را انتخاب کنید",
    "useCases.tryIt": "خودتان امتحان کنید",
    "useCases.typePrompt": "پیام خود را بنویسید...",
    "useCases.welcome": "سلام! من {name} هستم. چطور می‌توانم امروز به شما کمک کنم؟",
    
    "useCase1.title": "دستیار آکادمی رفیعی",
    "useCase1.description": "هوش مصنوعی کسب و کار و محتوا که از هزاران کارآفرین پشتیبانی می‌کند",
    "useCase1.prompt": "چگونه یک کسب و کار آنلاین را شروع کنم؟",
    "useCase1.response1": "بیایید با علایق شما شروع کنیم. من 3 مدل را بر اساس مهارت‌ها و فرصت‌های بازار به شما پیشنهاد می‌دهم.",
    "useCase1.prompt2": "یک ایده دراپ‌شیپینگ به من بده.",
    "useCase1.response2": "سه‌پایه سفری فشرده را امتحان کنید - در رسانه‌های اجتماعی محبوب است، تهیه آن از تامین‌کنندگان آسان است و حاشیه سود خوبی دارد.",
    "useCase1.prompt3": "امروز پراکنده‌ذهن هستم.",
    "useCase1.response3": "نگران نباشید. می‌خواهید یک بازنشانی تمرکز 3 مرحله‌ای را امتحان کنید؟ 1) همه تب‌ها را به جز یکی ببندید، 2) یک تایمر 25 دقیقه‌ای تنظیم کنید، و 3) یک کار کوچک را انجام دهید.",
    
    "useCase2.title": "دستیار مربی مهتاب",
    "useCase2.description": "راهنمایی تغذیه، تناسب اندام و انگیزش",
    "useCase2.prompt": "یک ناهار سالم که مرا سیر نگه دارد چیست؟",
    "useCase2.response1": "مرغ کبابی، کینوا و آووکادو با کنار سبزیجات برشته. این ترکیب پروتئین، چربی‌های سالم و کربوهیدرات‌های پیچیده را برای سیر ماندن به شما می‌دهد.",
    "useCase2.prompt2": "یک صوت انگیزشی به من بده",
    "useCase2.response2": "🎧 *اینجا یک صحبت انگیزشی 10 ثانیه‌ای برای افزایش انرژی شماست. به یاد داشته باشید که هر قدم کوچکی که امروز برمی‌دارید، پایه موفقیت فردای شما را می‌سازد.*",
    "useCase2.prompt3": "آیا این غذا کالری بالایی دارد؟",
    "useCase2.response3": "اجازه دهید عکسی را که به اشتراک گذاشته‌اید بررسی کنم - بر اساس آنچه می‌توانم ببینم، این وعده غذایی حاوی تقریباً 600 کالری است، با تعادل خوبی از پروتئین‌ها و چربی‌های سالم.",
    
    "useCase3.title": "دستیار اشکان هریت",
    "useCase3.description": "مشاور روانشناسی و خودیاری برای رشد شخصی",
    "useCase3.prompt": "در مدیریت اضط��اب به من کمک کن",
    "useCase3.response1": "بیایید مکث کنیم. من شما را از طریق یک تمرین 90 ثانیه‌ای زمینه‌یابی هدایت می‌کنم: 5 چیزی که می‌بینید، 4 چیزی که می‌توانید لمس کنید، 3 چیزی که می‌شنوید، 2 چیزی که می‌توانید بو کنید و 1 چیزی که می‌توانید بچشید را توجه کنید.",
    "useCase3.prompt2": "کتاب 'اثر مرکب' را خلاصه کن.",
    "useCase3.response2": "این کتاب درباره این است که چگونه عادت‌های کوچک و مداوم به نتایج بزرگ در طول زمان منجر می‌شوند. دارن هاردی توضیح می‌دهد که موفقیت از تغییرات رادیکال نمی‌آید بلکه از نظم روزانه‌ای می‌آید که انباشته می‌شود.",
    "useCase3.prompt3": "نمی‌دانم در زندگی چه می‌خواهم.",
    "useCase3.response3": "اشکالی ندارد. می‌خواهید 3 سؤال برای نوشتن در دفتر خاطرات را با هم بررسی کنیم؟ امتحان کنید: 1) در کودکی از چه چیزی لذت می‌بردید؟ 2) چه زمانی گذر زمان را فراموش می‌کنید؟ 3) اگر نمی‌توانستید شکست بخورید، چه کاری انجام می‌دادید؟",
    
    "useCase4.title": "دستیار لیدی باس",
    "useCase4.description": "پشتیبانی برندسازی و بازاریابی با هدایت زنان",
    "useCase4.prompt": "چگونه طراحی دوره خود برای زنان را شروع کنم؟",
    "useCase4.response1": "هدف و مخاطب خود را به من بگویید - من ساختار و عناوین جلسات را پیشنهاد می‌دهم. برای مثال، اگر این یک دوره اعتماد به نفس است، می‌توانیم با 'شناسایی نقاط قوت منحصر به فرد شما' به عنوان ماژول اول شروع کنیم.",
    "useCase4.prompt2": "یک برنامه رسانه اجتماعی ایجاد کن",
    "useCase4.response2": "اینجا یک چارچوب هفتگی است: دوشنبه - نقل قول الهام‌بخش، سه‌شنبه - نکته آموزشی، چهارشنبه - برجسته‌سازی مشتری، پنج‌شنبه - داستان شخصی، جمعه - منبع رایگان، آخر هفته - سؤال تعاملی.",
    "useCase4.prompt3": "یک عنوان درباره اعتماد به نفس برای استوری اینستاگرام من بنویس",
    "useCase4.response3": "شما 'زیاد' نیستید - شما دقیقاً کافی هستید. آن را بپذیرید. دنیا به صدای اصیل شما نیاز دارد، نه یک اکوی دیگر. #قدرت_خود_را_بپذیرید #انرژی_لیدی_باس",
    
    "useCase5.title": "دستیار تجارت الکترونیک",
    "useCase5.description": "مدیریت محصول و خدمات مشتری",
    "useCase5.prompt": "به من در بهینه‌سازی لیست‌های محصولات کمک کن",
    "useCase5.response1": "من لیست‌های فعلی شما را تحلیل می‌کنم و بهبودهایی را برای عناوین، توضیحات و تصاویر بر اساس الگوریتم‌های بازار و الگوهای جستجوی مشتری پیشنهاد می‌دهم.",
    "useCase5.prompt2": "یک ایمیل پیگیری مشتری ایجاد کن",
    "useCase5.response2": "اینجا یک قالب است: 'از خرید شما متشکریم! امیدواریم از [محصول] خود لذ�� می‌برید. آیا ممکن است تجربه خود را با یک بررسی سریع به اشتراک بگذارید؟ اینجا 10٪ تخفیف برای سفارش بعدی شماست.'",
    "useCase5.prompt3": "یک استراتژی فروش بیشتر خوب چیست؟",
    "useCase5.response3": "قانون 3 را امتحان کنید: یک گزینه بودجه، محصول هدف خود، و یک جایگزین برتر را نشان دهید. بیشتر مشتریان وقتی به این شکل ارائه شود به گزینه میانی جذب می‌شوند.",
    
    "useCase6.title": "دستیار شخصی",
    "useCase6.description": "وظایف روزانه و مدیریت برنامه",
    "useCase6.prompt": "روز من را برای حداکثر بهره‌وری سازماندهی کن",
    "useCase6.response1": "من تقویم شما را با جلسات کاری متمرکز در صبح، جلسات در میانه روز و وظایف اداری در اواخر بعدازظهر که انرژی معمولاً کاهش می‌یابد، بلوک‌بندی کرده‌ام.",
    "useCase6.prompt2": "قرار ملاقات من را یادآوری کن",
    "useCase6.response2": "شما فردا ساعت 15:30 قرار ملاقات پزشک دارید. من آن را با یادآوری 30 دقیقه‌ای به تقویم شما اضافه کرده‌ام و آدرس کلینیک را هم شامل کرده‌ام.",
    "useCase6.prompt3": "ایمیل‌های من از امروز را خلاصه کن",
    "useCase6.response3": "شما 12 ایمیل دریافت کرده‌اید: 3 مورد نیاز به اقدام فوری دارند (پیشنهادات مشتری)، 4 مورد فقط برای اطلاع هستند (به‌روزرسانی‌های خبرنامه)، و 5 مورد اولویت پایین دارند. فوری‌ترین مورد از سارا درباره ارائه فردا است.",
    
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
    
    "process.step4": "گفتگو و حا��ظه سفارشی",
    "process.step4.description": "توسعه منطق شخصی‌سازی شده",
    
    "process.step5": "ساخت فنی",
    "process.step5.description": "ساخت و آزمایش",
    
    "process.step6": "ادغام پلتفرم",
    "process.step6.description": "اتصال به ابزارهای موجود شما",
    
    "process.step7": "تحویل و آموزش",
    "process.step7.description": "پیاده‌سازی و آشنایی تیم",
    
    // CTA section
    "cta.title": "آماده متحول کردن گردش کار خود هستید؟",
    "cta.subtitle": "بگذارید سیناپس دستیار هوش مصنوعی سفارشی شما را برای خودکارسازی وظایف، افزایش بهره‌وری و مقیاس‌پذیری عملیات شما بسازد.",
    "cta.primary": "دستیار سفارشی خود را دریافت کنید",
    "cta.secondary": "مشاوره رزرو کنید",
    
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
    
    // Request Page
    "request.title": "درخواست دستیار هوش مصنوعی سفارشی خود",
    "request.subtitle": "بگذارید یک راه‌حل هوش مصنوعی سفارشی برای بهبود گردش کار و بهره‌وری شما بسازیم",
    "request.success.title": "درخواست با موفقیت ارسال شد",
    "request.success.message": "از علاقه شما به سیناپس متشکریم. تیم ما درخواست شما را بررسی کرده و به زودی با شما تماس خواهد گرفت.",
    "request.success.backHome": "بازگشت به خانه",
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

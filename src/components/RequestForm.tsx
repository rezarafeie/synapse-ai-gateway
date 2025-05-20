
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, ArrowLeft, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

type FormStep = 1 | 2 | 3;
type WebhookStatus = 'idle' | 'loading' | 'success' | 'error';

const RequestForm = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(33);
  const [webhookStatus, setWebhookStatus] = useState<WebhookStatus>('idle');
  const [lastRequestTime, setLastRequestTime] = useState<string>("");
  
  // Webhook URL
  const WEBHOOK_URL = "https://rafeie.app.n8n.cloud/webhook-test/synapserequest";
  
  // Form data
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    fullName: "",
    email: "",
    phone: "",
    
    // Step 2: Business Info
    businessName: "",
    industry: "",
    
    // Step 3: Project Requirements
    description: ""
  });

  // Update progress bar when step changes
  useEffect(() => {
    setProgress(currentStep * 33);
  }, [currentStep]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form submission

    // Form validation
    if (currentStep === 1) {
      if (!formData.fullName || !formData.email) {
        toast({
          title: language === "en" ? "Required fields missing" : "فیلدهای ضروری خالی است",
          description: language === "en" 
            ? "Please fill in all required fields before proceeding" 
            : "لطفا تمام فیلدهای ضروری را قبل از ادامه پر کنید",
          variant: "destructive"
        });
        return;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: language === "en" ? "Invalid email" : "ایمیل نامعتبر",
          description: language === "en" 
            ? "Please enter a valid email address" 
            : "لطفا یک آدرس ایمیل معتبر وارد کنید",
          variant: "destructive"
        });
        return;
      }
    }
    
    setCurrentStep(prev => (prev < 3 ? (prev + 1) as FormStep : prev));
  };

  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form submission
    setCurrentStep(prev => (prev > 1 ? (prev - 1) as FormStep : prev));
  };

  const sendToWebhook = async () => {
    try {
      // Format data for webhook
      const webhookData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone || "Not provided",
        businessName: formData.businessName || "Not provided",
        industry: formData.industry || "Not provided",
        description: formData.description || "Not provided",
        submittedAt: new Date().toISOString(),
        language: language,
      };
      
      // Log data being sent for debugging
      console.log("Sending webhook with data:", webhookData);
      
      // Set proper Content-Type header to application/json
      // Create a blob with JSON data to ensure correct content-type
      const jsonBlob = new Blob([JSON.stringify(webhookData)], {
        type: 'application/json'
      });
      
      // Send data to webhook endpoint with proper JSON content-type
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // This prevents CORS errors but will return an opaque response
        body: JSON.stringify(webhookData),
      });

      // Since we're using no-cors mode, we'll get an opaque response
      console.log("Webhook response received");
      setLastRequestTime(new Date().toLocaleString());
      return true;
    } catch (error) {
      console.error("Error sending webhook:", error);
      setLastRequestTime(new Date().toLocaleString());
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Only proceed if on the final step
    if (currentStep !== 3) {
      return;
    }
    
    setIsSubmitting(true);
    setWebhookStatus('loading');
    
    try {
      // Validate required fields before submission
      if (!formData.fullName || !formData.email) {
        toast({
          title: language === "en" ? "Required fields missing" : "فیلدهای ضروری خالی است",
          description: language === "en" 
            ? "Please fill in all required fields before submitting" 
            : "لطفا تمام فیلدهای ضروری را قبل از ارسال پر کنید",
          variant: "destructive"
        });
        setIsSubmitting(false);
        setWebhookStatus('error');
        return;
      }
      
      // Send data to webhook
      await sendToWebhook();
      setWebhookStatus('success');
      
      toast({
        title: language === "en" ? "Request submitted!" : "درخواست ارسال شد!",
        description: language === "en" 
          ? "We'll get back to you shortly about your AI assistant" 
          : "به زودی در مورد دستیار هوش مصنوعی شما با شما تماس خواهیم گرفت"
      });
      
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        businessName: "",
        industry: "",
        description: ""
      });
      setCurrentStep(1);
    } catch (error) {
      console.error("Submission error:", error);
      setWebhookStatus('error');
      toast({
        title: language === "en" ? "Submission error" : "خطا در ارسال",
        description: language === "en" 
          ? "There was a problem submitting your request. Please try again." 
          : "مشکلی در ارسال درخواست شما وجود داشت. لطفا دوباره تلاش کنید.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Translations based on language
  const getFieldLabel = (en: string, fa: string) => {
    return language === "en" ? en : fa;
  };

  // Debug card for webhook status
  const WebhookDebugCard = () => {
    const getStatusColor = () => {
      switch(webhookStatus) {
        case 'success': return 'text-green-600';
        case 'error': return 'text-red-600';
        case 'loading': return 'text-blue-600';
        default: return 'text-gray-600';
      }
    };

    const getStatusIcon = () => {
      switch(webhookStatus) {
        case 'success': return <CheckCircle2 className="h-5 w-5 text-green-600" />;
        case 'error': return <XCircle className="h-5 w-5 text-red-600" />;
        case 'loading': return <Loader2 className="h-5 w-5 animate-spin text-blue-600" />;
        default: return null;
      }
    };

    return (
      <Card className="mt-6 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">
            {language === "en" ? "Webhook Debug Info" : "اطلاعات دیباگ وب‌هوک"}
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-semibold">
              {language === "en" ? "Status:" : "وضعیت:"}
            </div>
            <div className={`flex items-center gap-1 ${getStatusColor()}`}>
              {getStatusIcon()}
              {language === "en" ? webhookStatus.toUpperCase() : 
                webhookStatus === 'idle' ? 'آماده' : 
                webhookStatus === 'loading' ? 'در حال ارسال' : 
                webhookStatus === 'success' ? 'موفق' : 'خطا'}
            </div>

            <div className="font-semibold">
              {language === "en" ? "URL:" : "آدرس:"}
            </div>
            <div className="truncate text-xs" dir="ltr">
              {WEBHOOK_URL}
            </div>

            {lastRequestTime && (
              <>
                <div className="font-semibold">
                  {language === "en" ? "Last Request:" : "آخرین درخواست:"}
                </div>
                <div dir="ltr">
                  {lastRequestTime}
                </div>
              </>
            )}

            <div className="font-semibold">
              {language === "en" ? "Content-Type:" : "نوع محتوا:"}
            </div>
            <div className="text-green-600" dir="ltr">
              application/json
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between mb-2 text-sm">
          <span>{language === "en" ? `Step ${currentStep} of 3` : `مرحله ${currentStep} از 3`}</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-all duration-300">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          <div className={`transition-opacity duration-300 ${currentStep === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <h2 className="text-2xl font-bold text-center mb-6">
              {language === "en" ? "Personal Information" : "اطلاعات شخصی"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              {language === "en" 
                ? "Let's start with your contact details" 
                : "بیایید با اطلاعات تماس شما شروع کنیم"}
            </p>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                  {getFieldLabel("Full Name", "نام و نام خانوادگی")} <span className="text-red-500">*</span>
                </label>
                <Input 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={getFieldLabel("Your full name", "نام و نام خانوادگی شما")}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {getFieldLabel("Email", "ایمیل")} <span className="text-red-500">*</span>
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={getFieldLabel("your.email@example.com", "ایمیل.شما@مثال.com")}
                  required
                  dir="ltr" // Email always LTR
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  {getFieldLabel("Phone Number", "شماره تلفن")} {getFieldLabel("(optional)", "(اختیاری)")}
                </label>
                <Input 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={getFieldLabel("Your phone number", "شماره تلفن شما")}
                  dir="ltr" // Phone number always LTR
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Step 2: Business Information */}
          <div className={`transition-opacity duration-300 ${currentStep === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <h2 className="text-2xl font-bold text-center mb-6">
              {language === "en" ? "Business Information" : "اطلاعات کسب و کار"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              {language === "en" 
                ? "Tell us about your business" 
                : "درباره کسب و کار خود به ما بگویید"}
            </p>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium mb-1">
                  {getFieldLabel("Business Name", "نام کسب و کار")} {getFieldLabel("(optional)", "(اختیاری)")}
                </label>
                <Input 
                  id="businessName" 
                  name="businessName" 
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder={getFieldLabel("Your business name", "نام کسب و کار شما")}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="industry" className="block text-sm font-medium mb-1">
                  {getFieldLabel("Industry or Business Type", "صنعت یا نوع کسب و کار")}
                </label>
                <Input 
                  id="industry" 
                  name="industry" 
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder={getFieldLabel("e.g., Retail, Healthcare, Education", "مثال: خرده‌فروشی، سلامت، آموزش")}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Step 3: Project Requirements */}
          <div className={`transition-opacity duration-300 ${currentStep === 3 ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <h2 className="text-2xl font-bold text-center mb-6">
              {language === "en" ? "Business Goals & AI Needs" : "اهداف کسب و کار و نیازهای هوش مصنوعی"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              {language === "en" 
                ? "Describe your business goals and what you're looking for in an AI assistant" 
                : "اهداف کسب و کار خود و آنچه در یک دستیار هوش مصنوعی به دنبال آن هستید را توضیح دهید"}
            </p>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  {getFieldLabel("Description", "توضیحات")}
                </label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={formData.description}
                  onChange={handleChange}
                  placeholder={language === "en" 
                    ? "Describe your business goals and how you think an AI assistant could help you achieve them. Include any specific features or capabilities you're looking for."
                    : "اهداف کسب و کار خود و اینکه چگونه فکر می‌کنید یک دستیار هوش مصنوعی می‌تواند به شما در دستیابی به آنها کمک کند را توضیح دهید. هر ویژگی یا قابلیت خاصی که به دنبال آن هستید را ذکر کنید."
                  }
                  rows={6}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Debug card - only shown in step 3 */}
            <WebhookDebugCard />
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <Button 
                type="button"
                variant="outline" 
                onClick={prevStep}
                disabled={isSubmitting}
                className="transition-all duration-300"
              >
                <ArrowLeft className={`h-4 w-4 ${language === "fa" ? "ml-2" : "mr-2"}`} />
                {language === "en" ? "Back" : "بازگشت"}
              </Button>
            ) : (
              <div></div> // Empty div to maintain layout
            )}
            
            {currentStep < 3 ? (
              <Button 
                type="button" // Important: Don't submit the form until on the last step
                onClick={nextStep}
                disabled={isSubmitting}
                className="bg-synapse-600 hover:bg-synapse-700 transition-all duration-300"
              >
                {language === "en" ? "Next" : "بعدی"}
                <ArrowRight className={`h-4 w-4 ${language === "fa" ? "mr-2" : "ml-2"}`} />
              </Button>
            ) : (
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-synapse-600 hover:bg-synapse-700 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className={`h-4 w-4 animate-spin ${language === "fa" ? "ml-2" : "mr-2"}`} />
                    {language === "en" ? "Submitting..." : "در حال ارسال..."}
                  </>
                ) : (
                  language === "en" ? "Submit Request" : "ارسال درخواست"
                )}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;

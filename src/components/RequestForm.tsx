
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

type FormStep = 1 | 2 | 3;

const RequestForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  
  // Form data
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: "",
    email: "",
    company: "",
    phone: "",
    
    // Step 2: Project Requirements
    industry: "",
    useCase: "",
    requirements: "",
    
    // Step 3: Timeline and Budget
    timeline: "",
    budget: "",
    additionalInfo: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    // Form validation
    if (currentStep === 1) {
      if (!formData.name || !formData.email) {
        toast({
          title: "Required fields missing",
          description: "Please fill in all required fields before proceeding",
          variant: "destructive"
        });
        return;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.industry || !formData.useCase) {
        toast({
          title: "Required fields missing",
          description: "Please fill in all required fields before proceeding",
          variant: "destructive"
        });
        return;
      }
    }
    
    setCurrentStep(prev => (prev < 3 ? (prev + 1) as FormStep : prev));
  };

  const prevStep = () => {
    setCurrentStep(prev => (prev > 1 ? (prev - 1) as FormStep : prev));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    toast({
      title: "Request submitted!",
      description: "We'll get back to you shortly about your AI assistant"
    });
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      useCase: "",
      requirements: "",
      timeline: "",
      budget: "",
      additionalInfo: ""
    });
    setCurrentStep(1);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                ${currentStep >= step 
                  ? "bg-synapse-600 border-synapse-600 text-white" 
                  : "border-gray-300 text-gray-500"}`}
            >
              {step}
            </div>
            <span className={`text-sm mt-2 ${currentStep >= step ? "text-synapse-600 font-medium" : "text-gray-500"}`}>
              {step === 1 ? "Basic Info" : step === 2 ? "Requirements" : "Timeline & Budget"}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Basic Information</h2>
              <p className="text-gray-600 dark:text-gray-400">Let's start with your contact details</p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company / Organization
                  </label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Step 2: Project Requirements */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Project Requirements</h2>
              <p className="text-gray-600 dark:text-gray-400">Tell us about your AI assistant needs</p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-1">
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="industry" 
                    name="industry" 
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-synapse-500 focus:border-synapse-500 dark:bg-gray-800 dark:text-white"
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium mb-1">
                    Use Case <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="useCase" 
                    name="useCase" 
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-synapse-500 focus:border-synapse-500 dark:bg-gray-800 dark:text-white"
                    required
                  >
                    <option value="">Select primary use case</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="data-analysis">Data Analysis</option>
                    <option value="content-generation">Content Generation</option>
                    <option value="process-automation">Process Automation</option>
                    <option value="decision-support">Decision Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium mb-1">
                    Specific Requirements
                  </label>
                  <Textarea 
                    id="requirements" 
                    name="requirements" 
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Describe your specific requirements for the AI assistant"
                    rows={5}
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Step 3: Timeline and Budget */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Timeline & Budget</h2>
              <p className="text-gray-600 dark:text-gray-400">Help us understand your project constraints</p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-1">
                    Desired Timeline
                  </label>
                  <select
                    id="timeline" 
                    name="timeline" 
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-synapse-500 focus:border-synapse-500 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-1">
                    Budget Range
                  </label>
                  <select
                    id="budget" 
                    name="budget" 
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-synapse-500 focus:border-synapse-500 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="<5k">Less than $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value=">50k">More than $50,000</option>
                    <option value="flexible">Flexible / Not sure yet</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium mb-1">
                    Additional Information
                  </label>
                  <Textarea 
                    id="additionalInfo" 
                    name="additionalInfo" 
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Any other details that would help us understand your project better"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <Button 
                type="button"
                variant="outline" 
                onClick={prevStep}
              >
                Back
              </Button>
            ) : (
              <div></div> // Empty div to maintain layout
            )}
            
            {currentStep < 3 ? (
              <Button 
                type="button"
                onClick={nextStep}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                type="submit"
                className="bg-synapse-600 hover:bg-synapse-700"
              >
                Submit Request
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Send, MessageSquare, User } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

type AssistantType = {
  id: string;
  name: string;
  description: string;
  avatar: string;
  prompts: {
    text: string;
    response: string;
  }[];
};

export default function UseCasesSection() {
  const { t } = useLanguage();
  const [selectedAssistant, setSelectedAssistant] = useState(0);
  const [activePrompt, setActivePrompt] = useState(0);
  const [typing, setTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const assistants: AssistantType[] = [
    {
      id: "rafiei",
      name: t("useCase1.title"),
      description: t("useCase1.description"),
      avatar: "👨‍💼",
      prompts: [
        {
          text: t("useCase1.prompt"),
          response: t("useCase1.response1")
        },
        {
          text: t("useCase1.prompt2"),
          response: t("useCase1.response2")
        },
        {
          text: t("useCase1.prompt3"),
          response: t("useCase1.response3")
        },
      ]
    },
    {
      id: "mahtab",
      name: t("useCase2.title"),
      description: t("useCase2.description"),
      avatar: "👩‍⚕️",
      prompts: [
        {
          text: t("useCase2.prompt"),
          response: t("useCase2.response1")
        },
        {
          text: t("useCase2.prompt2"),
          response: t("useCase2.response2")
        },
        {
          text: t("useCase2.prompt3"),
          response: t("useCase2.response3")
        },
      ]
    },
    {
      id: "ashkan",
      name: t("useCase3.title"),
      description: t("useCase3.description"),
      avatar: "👨‍🏫",
      prompts: [
        {
          text: t("useCase3.prompt"),
          response: t("useCase3.response1")
        },
        {
          text: t("useCase3.prompt2"),
          response: t("useCase3.response2")
        },
        {
          text: t("useCase3.prompt3"),
          response: t("useCase3.response3")
        },
      ]
    },
    {
      id: "ladyboss",
      name: t("useCase4.title"),
      description: t("useCase4.description"),
      avatar: "👩‍💼",
      prompts: [
        {
          text: t("useCase4.prompt"),
          response: t("useCase4.response1")
        },
        {
          text: t("useCase4.prompt2"),
          response: t("useCase4.response2")
        },
        {
          text: t("useCase4.prompt3"),
          response: t("useCase4.response3")
        },
      ]
    },
  ];
  
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    if (showResponse) {
      scrollToBottom();
    }
  }, [showResponse]);
  
  const tryPrompt = (promptIndex: number) => {
    setActivePrompt(promptIndex);
    setTyping(true);
    setShowResponse(true);
  };
  
  const handleTextComplete = () => {
    setTyping(false);
  };
  
  return (
    <section id="useCases" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
            {t("useCases.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("useCases.subtitle")}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Assistant selection sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                {t("useCases.assistants")}
              </h3>
              <div className="space-y-2">
                {assistants.map((assistant, idx) => (
                  <button
                    key={assistant.id}
                    onClick={() => {
                      setSelectedAssistant(idx);
                      setActivePrompt(-1);
                      setShowResponse(false);
                      setTyping(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedAssistant === idx
                        ? "bg-synapse-100 dark:bg-synapse-900 text-synapse-600 dark:text-synapse-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{assistant.avatar}</div>
                      <div>
                        <div className="font-medium">{assistant.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {assistant.description.length > 20 
                            ? `${assistant.description.substring(0, 20)}...` 
                            : assistant.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Chat interface */}
          <div className="flex-grow">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden flex flex-col h-[600px]">
              {/* Chat header */}
              <div className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{assistants[selectedAssistant].avatar}</div>
                  <div>
                    <div className="font-medium">{assistants[selectedAssistant].name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {assistants[selectedAssistant].description}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chat messages */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {/* Welcome message */}
                <div className="flex items-start">
                  <div className="flex h-9 w-9 shrink-0 select-none items-center justify-center rounded-full bg-synapse-100 dark:bg-synapse-900 text-synapse-500">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="ml-3 flex-1 space-y-1 bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {t("useCases.welcome").replace("{name}", assistants[selectedAssistant].name)}
                    </p>
                  </div>
                </div>
                
                {/* User prompt and AI response, if selected */}
                {showResponse && (
                  <>
                    <div className="flex items-start justify-end">
                      <div className="mr-3 flex-1 space-y-1 bg-synapse-100 dark:bg-synapse-900 p-4 rounded-lg text-right">
                        <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                          {assistants[selectedAssistant].prompts[activePrompt].text}
                        </p>
                      </div>
                      <div className="flex h-9 w-9 shrink-0 select-none items-center justify-center rounded-full bg-synapse-500 text-white">
                        <User className="h-5 w-5" />
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex h-9 w-9 shrink-0 select-none items-center justify-center rounded-full bg-synapse-100 dark:bg-synapse-900 text-synapse-500">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div className="ml-3 flex-1 space-y-1 bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                          {typing ? (
                            <TypingAnimation 
                              text={assistants[selectedAssistant].prompts[activePrompt].response} 
                              onComplete={handleTextComplete} 
                            />
                          ) : (
                            assistants[selectedAssistant].prompts[activePrompt].response
                          )}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                
                <div ref={messageEndRef} />
              </div>
              
              {/* Prompt suggestions */}
              <div className="bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {t("useCases.tryIt")}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {assistants[selectedAssistant].prompts.map((prompt, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      onClick={() => tryPrompt(idx)}
                      disabled={typing}
                      className="text-sm"
                    >
                      {prompt.text.length > 25 
                        ? `${prompt.text.substring(0, 25)}...` 
                        : prompt.text}
                    </Button>
                  ))}
                </div>
                
                {/* Dummy input field */}
                <div className="mt-4 flex items-center">
                  <input
                    type="text"
                    className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-synapse-500 dark:focus:ring-synapse-400 bg-white dark:bg-gray-800"
                    placeholder={t("useCases.typePrompt")}
                    disabled
                  />
                  <button 
                    className="bg-synapse-600 text-white px-4 py-2 rounded-r-md disabled:opacity-50"
                    disabled
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

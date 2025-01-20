// File: components/ChatComponentWrapper.tsx
"use client";

import React, { useState } from "react";
import PDFViewer from "@/components/PDFViewer";
import ChatComponent from "@/components/ChatComponent";
import { Button } from "@/components/ui/button";

type Props = {
  pdfUrl: string;
  chatId: number;
};

const ChatComponentWrapper: React.FC<Props> = ({ pdfUrl, chatId }) => {
  const [activeView, setActiveView] = useState<"pdf" | "chat">("pdf");

  return (
    <div className="flex-1 h-full flex flex-col lg:flex-row">
     
      <div className="lg:hidden flex justify-around mb-4 gap-2 mt-3">
        <Button
          variant={activeView === "pdf" ? "default" : "outline"}
          onClick={() => setActiveView("pdf")}
        >
          View PDF
        </Button>
        <Button
          variant={activeView === "chat" ? "default" : "outline"}
          onClick={() => setActiveView("chat")}
        >
          View Chat
        </Button>
      </div>

      
      <div className="flex-1 lg:flex lg:flex-row">
        {(activeView === "pdf" || window.innerWidth >= 1024) && (
          <div className="flex-[5] p-4 h-full">
            <PDFViewer pdf_url={pdfUrl} />
          </div>
        )}

        
        {(activeView === "chat" || window.innerWidth >= 1024) && (
          <div className="flex-[3] border-l border-gray-200 h-full">
            <ChatComponent chatId={chatId} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatComponentWrapper;

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useChat } from "ai/react";
import { Input } from "./ui/input";
import MessageList from "./MessageList";

type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
  const { input, handleInputChange, handleSubmit, messages } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="relative h-full flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white p-4 border-b">
        <h3 className="text-xl font-bold">Chat</h3>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto">
        <MessageList messages={messages} isLoading={false} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 bg-white p-4 flex items-center gap-2"
      >
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask any question..."
          className="flex-1"
        />
        <Button type="submit" className="bg-blue-600">
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default ChatComponent;

"use client";
import { DrizzleChat } from "@/lib/db/schema";
import Link from "next/link";
import { Button } from "./ui/button";
import { MessageCircle, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import SubscriptionButton from "./SubscriptionButton";

type Props = {
  chats: DrizzleChat[];
  chatId: number;
  isPro: boolean;
};

const ChatSideBar = ({ chats, chatId, isPro }: Props) => {

  return (
    <div className="w-full h-full max-h-screen bg-gray-900 text-gray-200 flex flex-col">
      {/* New Chat Button */}
      <Link href="/uploadpdf">
        <Button className="w-full border-dashed border-white border mb-4 mt-4">
          <PlusCircle className=" w-4 h-4" />
          New Chat
        </Button>
      </Link>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-2">
        {chats.map((chat) => (
          <Link key={chat.id} href={`/chat/${chat.id}`}>
            <div
              className={cn(
                "rounded-lg p-3 flex items-center",
                chat.id === chatId
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 hover:text-white"
              )}
            >
              <MessageCircle className="mr-2" />
              <p className="truncate">{chat.pdfName}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto p-4 border-t">
        <div className="flex items-center justify-between text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">Source</Link>
         <SubscriptionButton isPro={isPro} />
        </div>
      </div>
    </div>
  );
};

export default ChatSideBar;

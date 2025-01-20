
"use client";

import React, { useState } from "react";
import ChatSideBar from "@/components/ChatSideBar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { DrizzleChat } from "@/lib/db/schema";

type Props = {
  chats: Array<DrizzleChat>;
  selectedChatId: number;
  isPro: boolean;
  children: React.ReactNode;
};

const ChatSideBarWrapper: React.FC<Props> = ({ chats, selectedChatId, isPro, children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex h-full">
    
      <div className="hidden lg:block lg:w-1/5 h-full">
        <ChatSideBar chats={chats} chatId={selectedChatId} isPro={isPro} />
      </div>

      <div className="lg:hidden">
        <DropdownMenu open={isDropdownOpen} onOpenChange={setDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-2">
              <MenuIcon className="w-5 h-5" />
              All Chats
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <ChatSideBar chats={chats} chatId={selectedChatId} isPro={isPro} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default ChatSideBarWrapper;

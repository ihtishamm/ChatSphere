// import ChatComponent from "@/components/ChatComponent";
// import ChatSideBar from "@/components/ChatSideBar";
// import PDFViewer from "@/components/PDFViewer";
// import { db } from "@/lib/db";
// import { chats } from "@/lib/db/schema";
// import { checkSubscription } from "@/lib/subscription";
// import { auth } from "@clerk/nextjs/server";
// import { eq } from "drizzle-orm";
// import { redirect } from "next/navigation";
// import React from "react";

// type Props = {
//   params: {
//     chatId: string;
//   };
// };

// const ChatPage = async ({ params: { chatId } }: Props) => {
//   const { userId } = await auth();
//   if (!userId) {
//     return redirect("/sign-in");
//   }
   
//     const isPro = await checkSubscription();

//   const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
//   if (!_chats) {
//     return redirect("/");
//   }

//   if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
//     return redirect("/");
//   }

//   const currentChat = _chats.find((chat) => chat.id === parseInt(chatId));

//   return (
//     <div className="flex flex-col lg:flex-row h-screen">
//       <div className="lg:max-w-xs flex-[1]">
//         <ChatSideBar chats={_chats} chatId={parseInt(chatId)} isPro={isPro} />
//       </div>
//       <div className="flex-[5] p-4">
//         <PDFViewer pdf_url={currentChat?.pdfUrl || ""} />
//       </div>
//       <div className="flex-[3] border-l border-gray-200">
//         <ChatComponent chatId={parseInt(chatId)} />
//       </div>
//     </div>
//   );
// };

// export default ChatPage;



// File: app/chat/[chatId]/page.tsx
import ChatSideBarWrapper from "@/components/ChatSidebarWrapper";
import ChatComponentWrapper from "@/components/ChatComponentWrapper"; // Handles responsiveness
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

type Props = {
  params: {
    chatId: string;
  };
};

const ChatPage = async ({ params: { chatId } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/sign-in");
  }

  const isPro = await checkSubscription();
  const _chats = await db.select().from(chats).where(eq(chats.userId, userId));

  if (!_chats) {
    return redirect("/");
  }

  const currentChat = _chats.find((chat) => chat.id === parseInt(chatId));
  if (!currentChat) {
    return redirect("/");
  }

  return (
    <div className="h-screen">
      <ChatSideBarWrapper
        chats={_chats}
        selectedChatId={parseInt(chatId)}
        isPro={isPro}
      >
        <ChatComponentWrapper
          pdfUrl={currentChat.pdfUrl || ""}
          chatId={parseInt(chatId)}
        />
      </ChatSideBarWrapper>
    </div>
  );
};

export default ChatPage;




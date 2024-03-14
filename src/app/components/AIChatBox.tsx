import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import { Bot, SendHorizontal, Trash, XCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import Draggable from "react-draggable";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [chatBoxHeight, setChatBoxHeight] = useState<string>("300px");

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    setChatBoxHeight(`${messages.length * 60 + 100}px`);
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <Draggable>
      <div
        className={cn(
          "bottom-0 right-0 z-50 w-full max-w-[400px] p-1 xl:right-15",
          open ? "fixed" : "hidden",
        )}
      >
        <button
          onClick={onClose}
          className="mb-1 ms-auto block  group cursor-pointer outline-none hover:rotate-90 duration-300 "
        >
          <XCircle
            size={30}
            className="rounded-full bg-background  stroke-orange-600 fill-none group-hover:fill-gray-100"
          />
        </button>

        <div
          className={`flex h-[${chatBoxHeight}] flex-col rounded border bg-background shadow-xl transition-height ease-in-out duration-300`}
        >
          <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
            {messages.map((message) => (
              <ChatMessage message={message} key={message.id} />
            ))}
            {isLoading && lastMessageIsUser && (
              <ChatMessage
                message={{
                  id: "loading",
                  role: "assistant",
                  content: "Thinking...",
                }}
              />
            )}
            {error && (
              <ChatMessage
                message={{
                  id: "error",
                  role: "assistant",
                  content: "Something went wrong. Please try again!",
                }}
              />
            )}
            {!error && messages.length === 0 && (
              <div className="mx-8 flex h-full flex-col items-center justify-center gap-3 text-center">
                <Bot size={28} />
                <p className="text-lg font-medium">
                  Send a message to start the AI chat!
                </p>
                <p>
                  You can ask the chatbot any question about me and it will
                  find the relevant information on this website.
                </p>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="m-3 flex gap-1">
            <button
              type="button"
              className="flex w-10 flex-none items-center justify-center"
              title="Clear chat"
              onClick={() => setMessages([])}
            >
              <Trash
                size={24}
                className="hover:scale-110 opacity-75duration-200"
              />
            </button>
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Say something..."
              className="grow rounded border bg-background px-3 py-2"
              ref={inputRef}
            />
            <button
              type="submit"
              className="flex w-10 flex-none items-center justify-center disabled:opacity-50"
              disabled={input.length === 0}
              title="Submit message"
            >
              <SendHorizontal size={24} />
            </button>
          </form>
        </div>
      </div>
    </Draggable>
  );
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && <Bot className="mr-2 flex-none" />}
      <div
        className={cn(
          "rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-foreground text-background",
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-primary hover:underline"
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

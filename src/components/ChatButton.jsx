import React from "react";
import { MessageCircle } from "lucide-react";

const ChatButton = () => {
  return (
    <a
      href="https://wa.me/7039404909?text=Hello%20HazaelDevs!%20I%27m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="right-5 bottom-5 z-50 fixed flex items-center gap-2 bg-[#70C057] hover:bg-[#5EA048] shadow-lg px-4 py-3 rounded-full font-medium text-white transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
};

export default ChatButton;

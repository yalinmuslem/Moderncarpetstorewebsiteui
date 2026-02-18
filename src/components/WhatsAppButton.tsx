import React from "react";

type Props = {
  /** E.164 phone number without plus, e.g. 6281234567890. If omitted opens WhatsApp with a prefilled message but no number selected. */
  phone?: string;
  message?: string;
};

const WhatsAppButton: React.FC<Props> = ({ phone, message = "Hello! I am interested in your product." }) => {
  const cleanPhone = phone ? phone.replace(/\D/g, "") : "";
  const href = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat via WhatsApp"
      className="fixed right-4 bottom-20 z-50"
    >
      <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-150">
        {/* WhatsApp SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-hidden>
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.653.836 5.11 2.269 7.143L4 29l6.143-2.27A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zM16 25c-1.58 0-3.137-.326-4.545-.968l-.325-.16L6.5 25.5l1.632-4.693-.17-.34A9.966 9.966 0 0 1 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z" />
          <path d="M22.01 19.02c-.37-.185-2.187-1.08-2.525-1.2-.338-.12-.584-.185-.83.185-.245.37-.95 1.2-1.165 1.445-.215.245-.43.275-.8.095-.37-.185-1.565-.576-2.98-1.835-1.1-.98-1.84-2.19-2.055-2.56-.215-.37-.023-.57.165-.755.17-.165.37-.43.555-.645.185-.215.245-.37.37-.62.12-.245 0-.46-.06-.645-.06-.185-.83-2.005-1.14-2.745-.3-.72-.61-.62-.83-.63l-.71-.01c-.24 0-.63.085-.96.37-.33.285-1.26 1.23-1.26 3.01 0 1.78 1.29 3.5 1.47 3.74.18.245 2.55 3.9 6.18 5.475 3.63 1.585 3.63.995 4.285.935.655-.06 2.08-.845 2.37-1.66.295-.815.295-1.515.205-1.66-.09-.145-.33-.245-.7-.43z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;

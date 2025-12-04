import { Phone, MessageCircleMore, ChevronUp } from "lucide-react";

const FloatingActions = () => (
  <>
    <a
      href="https://wa.me/971585229332"
      className="fixed bottom-28 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
    >
      <MessageCircleMore className="w-6 h-6" />
    </a>

    <a
      href="tel:+971585229332"
      className="fixed bottom-16 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg"
    >
      <Phone className="w-6 h-6" />
    </a>

    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-6 bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  </>
);

export default FloatingActions;

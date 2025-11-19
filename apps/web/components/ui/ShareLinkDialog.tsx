import { Copy, X } from "lucide-react";
import { useState } from "react";

export default function ShareLinkDialog({
  isOpen,
  onClose,
  link,
  onJoin,
}: {
  isOpen: boolean;
  onClose: () => void;
  link: string;
  onJoin: () => void;
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#23232A] p-6 rounded-lg shadow-xl w-96 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-lg font-semibold">
            Share Live Session
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Share this link with others to collaborate in real-time.
        </p>
        <div className="flex items-center space-x-2 bg-black/30 p-2 rounded border border-gray-700 mb-6">
          <input
            type="text"
            readOnly
            value={link}
            className="bg-transparent text-gray-300 text-sm flex-1 outline-none truncate"
          />
          <button
            onClick={handleCopy}
            className="text-purple-400 hover:text-purple-300 transition-colors p-1"
            title="Copy link"
          >
            {copied ? (
              <span className="text-green-400 text-xs font-bold">Copied!</span>
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-300 hover:text-white text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onJoin}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded text-sm font-medium"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}

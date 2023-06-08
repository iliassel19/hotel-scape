import React from "react";

const SocialsList = () => {
  return (
    <ul className="flex items-center gap-2">
      <li className="opacity-40 transition-opacity hover:opacity-100">
        <button>
          <img
            src="/Assets/Icons/DiscordLogo.svg"
            alt="Discord Logo"
          />
        </button>
      </li>

      <li className="opacity-40 transition-opacity hover:opacity-100">
        <button>
          <img
            src="/Assets/Icons/YoutubeLogo.svg"
            alt="Youtube Logo"
          />
        </button>
      </li>
      <li className="opacity-40 transition-opacity hover:opacity-100">
        <button>
          <img
            src="/Assets/Icons/TwitterLogo.svg"
            alt="Twitter Logo"
          />
        </button>
      </li>

      <li className="opacity-40 transition-opacity hover:opacity-100">
        <button>
          <img
            src="/Assets/Icons/InstagramLogo.svg"
            alt="Instagram Logo"
          />
        </button>
      </li>
    </ul>
  );
};

export default SocialsList;

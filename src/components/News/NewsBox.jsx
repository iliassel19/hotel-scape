import React from "react";

const NewsBox = ({ img, alt, date, title }) => {
  return (
    <article className={`w-1/3`}>
      <div className="w-full h-[400px] mb-4">
        <img src={img} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm text-green-dark uppercase font-Sans-serif font-medium tracking-wider">
          News
        </h4>
        <p className="font-Sans-serif text-sm text-grey-basic font-medium">
          {date}
        </p>
      </div>
      <h3 className="font-Serif text-[26px] leading-[34px] text-green-very-dark mb-6">
        {title}
      </h3>
      <a
        href="#"
        className="text-green-dark text-sm font-Sans-serif uppercase tracking-wider font-medium flex items-center gap-4 transition-[gap] hover:gap-6"
      >
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </article>
  );
};

export default NewsBox;

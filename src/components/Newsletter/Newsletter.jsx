import React from "react";
import FormContainer from "../../UI/FormContainer";
const Newsletter = () => {
  return (
    <section className="px-20 py-24 col-start-1 col-end-[-1] flex flex-col items-center justify-center">
      <h3 className="text-sm text-green-dark uppercase font-Sans-serif tracking-wider font-medium mb-6">
        Newsletter
      </h3>
      <h2 className="text-[44px] leading-[48px] font-Serif w-1/2 text-center mb-12">
        Subscribe to receive our latest news and information
      </h2>
      <FormContainer button="Submit" className="w-[55%] py-4">
        <div className="flex items-center gap-6">
          <label htmlFor="email">
            <span className="hidden">Email</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-green-dark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </label>
          <input
            type="text"
            required
            placeholder="Your Email"
            name="email"
            id="email"
            className="focus:outline-none font-Sans-serif focus:border-b focus:border-green-dark focus:text-green-dark"
          />
        </div>
      </FormContainer>
    </section>
  );
};

export default Newsletter;

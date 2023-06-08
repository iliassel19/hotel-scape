import React from "react";
import Container from "../UI/Container";
import Form from "../UI/Form";
import SocialsList from "../UI/SocialsList";
import FormGroup from "../UI/FormGroup";
import Input from "../UI/Input";
import Button from "../UI/Button";
import EmailIcon from "../Icons/EmailIcon";
const Footer = () => {
  return (
    <footer className="bg-bgSec">
      <Container className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.2fr_1fr_1.5fr] lg:items-start lg:justify-between">
        <div className="pr-8">
          <button className="mb-4">
            <img
              src="/Assets/Icons/Logo.svg"
              alt="Logo Icon."
            />
          </button>
          <p className="font-work text-base text-white opacity-80 mb-6">
            NFT marketplace UI created with Anima for Figma
          </p>
          <div>
            <p className="font-work text-base text-white opacity-80 mb-2">
              Join our community
            </p>
            <SocialsList />
          </div>
        </div>
        <div>
          <h3 className="text-white text-[18px] font-semibold font-space md:text-h5 mb-6">
            Explore
          </h3>
          <ul className="flex flex-col items-start gap-4">
            <li className="text-base text-white font-work opacity-75 transition-opacity hover:opacity-100">
              <button>Marketplace</button>
            </li>
            <li className="text-base text-white font-work opacity-75 transition-opacity hover:opacity-100">
              <button>Ranking</button>
            </li>
            <li className="text-base text-white font-work opacity-75 transition-opacity hover:opacity-100">
              <button>Connect a wallet</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-space text-[18px] font-semibold md:text-h5 ">
            Join Our Weekly Digest
          </h3>
          <p className="font-work text-base text-white opacity-80">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <Form className="md:w-2/3 lg:w-full">
            <FormGroup className="rounded-[20px] flex-col gap-2 min-[900px]:gap-0 min-[900px]:flex-row">
              <label
                htmlFor="email"
                className="hidden">
                email
              </label>
              <Input
                placeholder="Enter your email here"
                id="email"
                type="email"
                className="lg:flex-[2]"
              />
              <Button
                type="submit"
                filled={true}
                className="rounded-full min-[900px]:rounded-[20px] opacity-100 h-[48px] md:h-[60px] gap-2 lg:flex-[1]">
                <EmailIcon
                  className="w-5 h-5"
                  color="#fff"
                />
                Subscribe
              </Button>
            </FormGroup>
          </Form>
        </div>
        <div className="col-span-3 pt-4 border-t border-captionc">
          <p className="text-base text-captionc font-work">
            &copy; NFT Market. 2023. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

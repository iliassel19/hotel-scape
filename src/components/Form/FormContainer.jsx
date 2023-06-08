import React from "react";
import Container from "../UI/Container";
import Form from "../UI/Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
import FormGroup from "../UI/FormGroup";
import EmailIcon from "../Icons/EmailIcon";

const FormContainer = () => {
  return (
    <Container>
      <div className="w-full h-full bg-bgSec p-8 md:py-8 md:px-12 lg:py-12 lg:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20 rounded-[20px]">
        <div className="md:self-stretch flex-[0.5]">
          <img
            src="/Assets/Images/Subscribe-img.png"
            alt="Astronaut reading newspaper NFT"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <div className="w-full flex-[0.5]">
          <h2 className="text-h5 md:text-h4 lg:text-h3 text-white capitalize font-work font-semibold mb-2 leading-tight">
            Join our weekly digest
          </h2>
          <p className="text-base lg:text-[18px] capitalize text-white opacity-80 mb-8 leading-normal">
            Get exclusive promotions & updates straight to your Inbox.
          </p>
          <Form>
            <FormGroup className="flex-col gap-4 rounded-[20px]">
              <label
                htmlFor="email"
                className="hidden">
                email
              </label>
              <Input
                placeholder="Enter your email here"
                id="email"
                type="email"
                className="min-[900px]:flex-[2]"
              />
              <Button
                type="submit"
                filled={true}
                className="rounded-full md:rounded-[20px] opacity-100 h-[48px] md:h-[60px] min-[900px]:flex-[1] justify-center gap-2">
                <EmailIcon
                  className="w-5 h-5"
                  color="#fff"
                />
                Subscribe
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default FormContainer;

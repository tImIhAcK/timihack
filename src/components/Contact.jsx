import React from "react";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  const inputStyles = `mb-5 rounded-md w-full bg-primary-300 px-5 py-3 bg-gray-700`;

  const contact_icons = [
    {
      icon: <HiOutlineMail size={25} color="" />,
      text: "adeniranjohn2016@gmail.com",
    },
    { icon: <FaWhatsapp size={25} color="" />, text: "+234 805 161 0576" },
    {
      icon: <HiLocationMarker size={25} color="" />,
      text: "Akure, Nigeria",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(data); // You can handle the form data submission here
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-bold">
          Contact{" "}
          <span className="text-[#0a63c3] border-b-2 border-b-white">Me</span>
        </h3>
        <p className="text-gray-600 my-3 text-lg font-signature">
          Get in touch
        </p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-900 p-6 rounded-lg mx-auto">
          <form
            className="flex flex-col flex-1 gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="NAME"
              {...register("name", { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p className="text-red-500">
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters"}
              </p>
            )}

            <input
              className={inputStyles}
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                maxLength: 100,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-500">
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className={inputStyles}
              rows={10}
              cols={50}
              placeholder="MESSAGE"
              {...register("message", { required: true, maxLength: 2000 })}
            />
            {errors.message && (
              <p className="text-red-500">
                {errors.message.type === "required" && "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters"}
              </p>
            )}

            <button
              type="submit"
              className="btn-primary justify-center items-center"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_icons.map((contact, index) => (
              <div key={index} className="flex gap-4 w-fit items-center">
                <div className="min-w-[4rem] text-2xl min-h-[4rem] flex items-center justify-center text-white bg-[#0a63c3] rounded-full">
                  {contact.icon}
                </div>
                <p className="text-lg">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

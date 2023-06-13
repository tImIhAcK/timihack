import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const inputStyles = `mb-5 rounded-md w-full bg-primary-300 px-5 py-3 text-gray-900`;

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
              rows={4}
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
              Submit
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

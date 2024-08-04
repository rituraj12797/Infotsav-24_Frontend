// import React from 'react'
import { useState } from "react";
import ContactInfo from "../Components/Contact/ContactInfo";
import Map from "../Components/Contact/Map";
import ParticlesBackground from "../Components/ParticlesBackground";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="flex flex-col mt-[100px] w-full text-white items-center px-4 sm:px-6 b-16">
      <div className="relative z-[-1]">
        <ParticlesBackground />
      </div>
      <h1 className="text-[3.5rem] md:text-[5rem] font-pixelify text-white">
        Contact Us
      </h1>
      <h2 className="text-[2rem] md:text-[3rem] font-pixelify text-white">
        Fill the form
      </h2>
      <form
        className=" h-[80%] w-[50%] mt-[2%] flex flex-col justify-center items-center gap-[15px] text-white"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="w-[100%] md:w-[80%] h-[15%] lg:w-[60%]  rounded-sm px-[15px] bg-transparent border border-2 border-indigo-500"
          placeholder="YOUR NAME"
          onChange={handleInputChange}
          value={formData.name}
          name="name"
        />
        <input
          type="email"
          className="w-[100%] md:w-[80%]  h-[15%] lg:w-[60%] rounded-sm px-[15px] bg-transparent border border-2 border-indigo-500"
          placeholder="E-MAIL ADDRESS"
          onChange={handleInputChange}
          value={formData.email}
          name="email"
        />
        <textarea
          placeholder="MESSAGE"
          className="w-[100%] md:w-[80%] h-[70%] lg:w-[60%]  rounded-sm px-[15px] bg-transparent border border-2 border-indigo-500 resize-none"
          onChange={handleInputChange}
          value={formData.message}
          name="message"
        />
        <button
          type="submit"
          className="h-[50px] w-[150px] rounded-full bg-indigo-500"
        >
          Send
        </button>
      </form>
      <section className="flex flex-col w-full items-center gap-4 mt-6 sm:mt-8">
        <h2 className="xl:text-5xl md:text-2xl text-xl font-pixelhugger">Or</h2>
        <h2 className="xl:text-6xl md:text-3xl text-xl font-pixelhugger mt-6 sm:mt-8 mb-4 sm:mb8">
          Reach out to us directly
        </h2>
        <div className="grid md:grid-cols-2 w-full gap-6">
          <Map />
          <ContactInfo />
        </div>
      </section>
    </main>
  );
}

export default ContactUs;

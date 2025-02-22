import React from 'react'
import { Mail } from "lucide-react";

const Support = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-16 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-6xl">
                <div className="bg-[#312F2F] p-8 rounded-2xl shadow-lg  space-y-8">
                    <h3 className="text-yellow-400 text-lg font-semibold">Get in Touch</h3>
                    <h1 className="text-3xl font-semibold mt-2">
                        Lets chat, <br /> Reach Out to Us
                    </h1>
                    <p className="text-gray-400 text-base mt-2 mb-6">
                        Have Questions or feedback? We’re here to help. Send us an
                        <span className="text-[#c3897f] font-bold"> email</span> by submitting the form.
                    </p>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-semibold mt-2" >Customer Support :</h1>
                        <p className="text-gray-400 text-sm mt-2 mb-6">
                            our Support team is available around clock to address any queries you may have!
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-xl font-semibold mt-2" >Feedback & Suggestions :</h1>
                        <p className="text-gray-400 text-sm mt-2 mb-6">
                            We value yoru feedback and continuously working to improve D-club. your input is crucial in shappin the furure of D-club !!!
                        </p>
                    </div>

                    <div className="flex items-center mt-6 space-x-3 text-[#c3897f]">
                        <Mail size={20} />
                        <p>dclub.auth+support@gmail.com</p>
                    </div>
                </div>






                {/* Right Section (Form) */}
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 w-full max-w-sm">
                        {/* Full Name Input */}
                        <FormItem name="fullName" label="Full Name">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="mt-2 p-2 sm:p-3 rounded-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1"
                            />
                        </FormItem>

                        {/* Email Input */}
                        <FormItem name="email" label="Email">
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 p-2 sm:p-3 rounded-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1"
                            />
                        </FormItem>

                        {/* Subject Input */}
                        <FormItem name="subject" label="Subject">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Enter your Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-2 p-2 sm:p-3 rounded-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1"
                            />
                        </FormItem>

                        {/* Message Textarea */}
                        <label className="block mt-4 text-gray-300">Leave us a message</label>
                        <textarea
                            rows="7"
                            name="message"
                            placeholder="Content"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-96 bg-[#312F2F] text-white p-3 rounded-xl mt-1 outline-none"
                        ></textarea>

                        {/* Submit Button */}
                        <div className="flex flex-col mt-5">
                            <button
                                type="submit"
                                className="w-96 p-2 sm:p-3 rounded-xl bg-[#FFD700] text-black hover:bg-[#e6c000] transition"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
const FormItem = ({ name, label, children }) => {
    return (
        <div className="w-full">
            <label className="text-[#c2c2cb] font-medium">{label}</label>
            {children}
        </div>
    );
};

export default Support

import React from "react";
import { Mail } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { supportEnd } from "../../http/api.js";
import toast from "react-hot-toast";

const supportQuery = async (credentials) => {
    return await supportEnd(credentials);
};

const Support = () => {
    const { mutate, isPending } = useMutation({
        mutationKey: ["login"],
        mutationFn: supportQuery,
        onSuccess: async () => {
            toast.success("Query sent successfully");
            document.getElementById("support-form").reset();
        },
        onError: (error) => {
            toast.error("Login Failed: " + (error?.message || "Something went wrong"));
        },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const fullName = formData.get("fullName");
        const subject = formData.get("subject");
        const message = formData.get("message");
        mutate({ email, fullName, subject, message });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4 sm:p-16 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 w-full max-w-6xl">
                {/* Left Section (Content) */}
                <div className="bg-[#312F2F] p-6 sm:p-8 rounded-2xl shadow-lg space-y-6 sm:space-y-8">
                    <h3 className="text-yellow-400 text-base sm:text-lg font-semibold">Get in Touch</h3>
                    <h1 className="text-2xl sm:text-3xl font-semibold">
                        Let's chat, <br /> Reach Out to Us
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base">
                        Have questions or feedback? We’re here to help. Send us an
                        <span className="text-[#c3897f] font-bold"> email</span> by submitting the form.
                    </p>
                    <div className="flex flex-col">
                        <h1 className="text-lg sm:text-xl font-semibold">Customer Support:</h1>
                        <p className="text-gray-400 text-sm">
                            Our support team is available around the clock to address any queries you may have!
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-lg sm:text-xl font-semibold">Feedback & Suggestions:</h1>
                        <p className="text-gray-400 text-sm">
                            We value your feedback and are continuously working to improve D-club. Your input is crucial in shaping the future of D-club!
                        </p>
                    </div>

                    <div className="flex items-center mt-4 sm:mt-6 space-x-3 text-[#c3897f]">
                        <Mail size={20} />
                        <p className="text-sm sm:text-base">dclub.auth+support@gmail.com</p>
                    </div>
                </div>

                {/* Right Section (Form) */}
                <div className="p-4 sm:p-8">
                    <form id="support-form" onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:space-y-5 w-full max-w-sm">
                        {/* Full Name Input */}
                        <FormItem name="fullName" label="Full Name">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                className="mt-2 p-2 sm:p-3 rounded-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1"
                                required
                            />
                        </FormItem>

                        {/* Email Input */}
                        <FormItem name="email" label="Email">
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                className="mt-2 p-2 sm:p-3 rounded-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1"
                                required
                            />
                        </FormItem>

                        {/* Subject Input */}
                        <FormItem name="subject" label="Subject">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Enter your Subject"
                                className="mt-2 p-2 sm:p-3 rounded-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1"
                                required
                            />
                        </FormItem>

                        {/* Message Textarea */}
                        <label className="block mt-4 text-gray-300">Leave us a message</label>
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Content"
                            className="w-full bg-[#312F2F] text-white p-3 rounded-xl mt-1 outline-none"
                            required
                        ></textarea>

                        {/* Submit Button */}
                        <div className="flex flex-col mt-4 sm:mt-5">
                            <button
                                type="submit"
                                className={`w-full p-2 sm:p-3 rounded-xl transition font-medium ${isPending ? "bg-gray-500 text-white cursor-not-allowed" : "bg-[#FFD700] text-black hover:bg-[#e6c000]"
                                    }`}
                                disabled={isPending}
                            >
                                {isPending ? "Sending..." : "Send Message"}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const FormItem = ({ name, label, children }) => {
    return (
        <div className="w-full">
            <label className="text-[#c2c2cb] font-medium">{label}</label>
            {children}
        </div>
    );
};

export default Support;
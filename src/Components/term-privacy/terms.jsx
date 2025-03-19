import React from "react";

const Terms = () => {
    return (
        <div className="min-h-screen  text-white flex justify-center items-center">
            <div className="w-3/4 max-w-4xl bg-gray-900  pb-0 rounded-xl shadow-lg px-10 justify-center items-center pt-4 mt-36 ">
                <h1 className="text-4xl font-bold text-[#94A3B8] mb-6 text-center ">Terms of Service</h1>
                <p className="text-gray-400 text-sm mb-4">Effective Date: <span className="text-[#A47D76] text-sm rounded p-1 font-bold"> 13-03-2025</span></p>

                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
                    <p className="text-gray-300 mt-2">
                        Welcome to <span className="text-[#FFD700] font-semibold">D-Club</span>! 🎉 By using our platform, you agree to follow our Terms of Service. If you do not agree, please do not use our services.
                    </p>
                </section>

                {/* Eligibility */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">2. Eligibility</h2>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                        <li>You must be <strong>18 years or older</strong> to use D-Club.</li>
                        <li>Users are responsible for the accuracy of their information.</li>
                    </ul>
                </section>

                {/* Account & Security */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">3. Account & Security</h2>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                        <li>Keep your account <strong>secure</strong> and do not share login credentials.</li>
                        <li>Suspicious activity may result in <strong>suspension or termination</strong> of your account.</li>
                    </ul>
                </section>

                {/* Acceptable Use */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">4. Acceptable Use</h2>
                    <p className="text-gray-300 mt-2">Users must not:</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                        <li>Engage in <strong>illegal activities</strong> or harassment.</li>
                        <li>Post hate speech, discrimination, or spam.</li>
                        <li>Create <strong>fake profiles</strong> or misleading information.</li>
                    </ul>
                </section>

                {/* Party Mode & Club Partner Matching */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">5. Party Mode & Club Partner Matching</h2>
                    <p className="text-gray-300 mt-2">
                        D-Club helps users find <strong>club partners</strong> based on preferences. However:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                        <li>We do not guarantee successful matches or user behavior.</li>
                        <li>Users should always <strong>prioritize safety</strong> when meeting someone.</li>
                    </ul>
                </section>

                {/* Data & Privacy */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">6. Data & Privacy</h2>
                    <p className="text-gray-300 mt-2">
                        Your personal data is handled as per our <strong onClick={() => navigate("/privacy")} className=" cursor-pointer hover:text-gray-100">Privacy Policy</strong>. We do not share data with third parties without consent.
                    </p>
                </section>

                {/* Termination & Suspension */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">7. Termination & Suspension</h2>
                    <p className="text-gray-300 mt-2">
                        We reserve the right to suspend or remove accounts that violate our policies.
                    </p>
                </section>

                {/* Disclaimer & Liability */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">8. Disclaimer & Liability</h2>
                    <p className="text-gray-300 mt-2">
                        D-Club is not responsible for user interactions. Users must exercise caution and discretion.
                    </p>
                </section>

                {/* Changes to Terms */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">9. Changes to Terms</h2>
                    <p className="text-gray-300 mt-2">
                        We may update these terms at any time. Continued use means acceptance of changes.
                    </p>
                </section>

                {/* Contact Us */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">10. Contact Us</h2>
                    <p className="text-gray-300 mt-2">
                        Have questions? Reach out to us at <span className="text-[#FFD700]">dclub.auth+support@gmail.com</span>.
                    </p>
                </section>

                {/* Footer */}
                <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-500">
                    {/* <p>&copy; {new Date().getFullYear()} D-Club. All rights reserved.</p> */}
                </div>
            </div>
        </div>
    );
};

export default Terms;
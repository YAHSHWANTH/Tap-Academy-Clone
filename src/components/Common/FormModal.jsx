import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import counselorImg from "../../assets/counselor.png";

export default function FormModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    learningMode: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm({ fullName: "", email: "", phone: "", learningMode: "" });
      setErrors({});
      setSubmitted(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!form.fullName.trim()) tempErrors.fullName = "Full name is required";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!form.learningMode) tempErrors.learningMode = "Learning mode is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const response = await fetch("https://formsubmit.co/ajax/yaswanthbv2003@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            Name: form.fullName,
            Email: form.email,
            Phone: "+91 " + form.phone,
            "Learning Mode": form.learningMode,
            _subject: "New Free Demo Class Booking - TAP Academy"
          })
        });

        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => {
            onClose();
          }, 2500);
        } else {
          setErrors({ submit: "Something went wrong. Please try again." });
        }
      } catch (err) {
        setErrors({ submit: "Network error. Please check your connection and try again." });
      } finally {
        setLoading(false);
      }
    }
  };

  const features = [
    "Book a Free Demo Class – Online & Offline",
    "Resolve Your Doubts",
    "Get a Job in 120 Days",
    "Make Your Parents Proud",
    "Step-by-Step Job Guidance",
    "We Are Here to Help You",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative z-10 grid w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl md:grid-cols-2"
          >
            {/* Left Side: Counselor Details */}
            <div className="relative flex flex-col justify-between bg-gradient-to-b from-[#180A2B] to-[#0A0314] p-6 pb-0 sm:p-8 sm:pb-0 md:p-10 md:pb-0">
              {/* Starry/Galaxy Glow effects */}
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-pink-600/10 blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Talk to Our <br />
                  <span className="text-yellow-400">Career Counsellor</span>
                </h2>

                <ul className="mt-6 space-y-3 sm:space-y-4">
                  {features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                        <Check className="h-3 w-3 text-green-400" strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-slate-200 sm:text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Counselor image positioned at the bottom right */}
              <div className="relative mx-auto mt-6 w-full max-w-[280px] md:max-w-none md:mt-0">
                <img
                  src={counselorImg}
                  alt="Career Counselor"
                  className="h-auto w-full object-contain object-bottom max-h-[220px] md:max-h-[300px]"
                />
              </div>
            </div>

            {/* Right Side: Lead Capture Form */}
            <div className="relative flex flex-col justify-center bg-[#1A1F29] p-6 sm:p-8 md:p-10">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 text-left"
                  >
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300 sm:text-sm">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`rounded-xl border bg-[#232936] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none ${
                          errors.fullName
                            ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-slate-700/50 focus:border-blue-500/50 focus:shadow-glow-blue"
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-xs font-medium text-red-400">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300 sm:text-sm">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className={`rounded-xl border bg-[#232936] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none ${
                          errors.email
                            ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-slate-700/50 focus:border-blue-500/50 focus:shadow-glow-blue"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs font-medium text-red-400">{errors.email}</span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300 sm:text-sm">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div
                        className={`flex items-center rounded-xl border bg-[#232936] transition-all overflow-hidden ${
                          errors.phone
                            ? "border-red-500/50 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500"
                            : "border-slate-700/50 focus-within:border-blue-500/50 focus-within:shadow-glow-blue"
                        }`}
                      >
                        <span className="bg-[#2B3242] px-4 py-2.5 text-sm font-semibold text-slate-300 border-r border-slate-700/50 select-none">
                          +91
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-xs font-medium text-red-400">{errors.phone}</span>
                      )}
                    </div>

                    {/* Preferred Learning Mode */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300 sm:text-sm">
                        Preferred Learning Mode <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="learningMode"
                        value={form.learningMode}
                        onChange={handleChange}
                        className={`rounded-xl border bg-[#232936] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none ${
                          errors.learningMode
                            ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-slate-700/50 focus:border-blue-500/50 focus:shadow-glow-blue"
                        }`}
                      >
                        <option value="" disabled>
                          Select learning mode
                        </option>
                        <option value="online">Online (Live & Self-paced)</option>
                        <option value="offline">Offline (Bangalore Campus)</option>
                        <option value="hybrid">Hybrid Mode</option>
                      </select>
                      {errors.learningMode && (
                        <span className="text-xs font-medium text-red-400">
                          {errors.learningMode}
                        </span>
                      )}
                    </div>

                    {/* Privacy Disclaimer */}
                    <p className="mt-2 text-center text-xs leading-relaxed text-slate-400">
                      By continuing, I have read and agree to TAP Academy's{" "}
                      <a href="#terms" className="text-blue-400 hover:underline">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a href="#privacy" className="text-blue-400 hover:underline">
                        Privacy Policy
                      </a>
                    </p>

                    {errors.submit && (
                      <span className="text-xs font-semibold text-red-400 text-center">{errors.submit}</span>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      disabled={loading}
                      whileHover={loading ? {} : { scale: 1.02 }}
                      whileTap={loading ? {} : { scale: 0.98 }}
                      type="submit"
                      className="mt-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Attend Free Demo Class"
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 shadow-lg shadow-green-500/20">
                      <Check className="h-8 w-8 text-green-400 animate-bounce" strokeWidth={3} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Class Booked Successfully!</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Our senior career counsellor will contact you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

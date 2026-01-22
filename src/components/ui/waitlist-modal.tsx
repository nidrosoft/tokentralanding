"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const FORMSPARK_ACTION_URL = "https://submit-form.com/AQxPkG39t";

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch(FORMSPARK_ACTION_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setName("");
                setEmail("");
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setIsSuccess(false);
        setError("");
        setName("");
        setEmail("");
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900">
                            {/* Purple gradient header */}
                            <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 px-6 py-8 text-center">
                                <button
                                    onClick={handleClose}
                                    className="absolute right-4 top-4 rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                                    <svg
                                        viewBox="0 0 80 85"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
                                    >
                                        <path
                                            d="M24.4211 56.4923L0.35123 56.5933C0.264276 56.5933 0.180883 56.5569 0.119397 56.4923C0.0579114 56.4277 0.0233688 56.3401 0.0233688 56.2487C-0.012463 43.1692 -0.00708886 33.7963 0.0394925 28.13C0.163112 14.1187 11.5146 2.0331 24.6022 0.2315C25.6306 0.0885 28.4559 0.0245 33.0782 0.0395C37.3386 0.0584 43.8744 0.0452 52.6854 0C52.7823 0 52.8753 0.0405 52.9438 0.1125C53.0124 0.1845 53.0509 0.2822 53.0509 0.384V28.1752C53.0509 28.2396 53.0752 28.3014 53.1186 28.3469C53.1619 28.3925 53.2207 28.418 53.282 28.418H79.6829C79.721 28.418 79.7587 28.4258 79.794 28.4408C79.8292 28.4559 79.8612 28.4779 79.8881 28.5057C79.9151 28.5335 79.9364 28.5665 79.951 28.6028C79.9656 28.6391 79.9731 28.6781 79.9731 28.7174C79.9839 31.2361 79.9928 39.4231 80 53.2782C80 57.7133 79.7187 60.9813 79.1562 63.0822C75.8238 75.501 64.6926 84.983 52.2178 84.96C45.2198 84.949 36.9069 84.962 27.2788 85C27.189 85 27.1029 84.963 27.0394 84.897C26.9759 84.832 26.9402 84.743 26.9402 84.65V58.8802C26.9402 58.8402 41.6988 58.9172 41.6842 58.8802C41.6696 58.8432 41.7112 34.1169 41.6842 34.0885C41.6573 34.0602 24.4563 34.1039 24.4211 34.0885C24.3858 34.0732 24.4592 56.4923 24.4211 56.4923Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white">
                                    Join the Waitlist
                                </h2>
                                <p className="mt-2 text-sm text-white/80">
                                    Be the first to know when TokenTra launches
                                </p>
                            </div>

                            {/* Form content */}
                            <div className="px-6 py-6">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-4"
                                    >
                                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                            <svg
                                                className="h-6 w-6 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            You&apos;re on the list!
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                            We&apos;ll notify you when TokenTra is ready.
                                        </p>
                                        <button
                                            onClick={handleClose}
                                            className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 px-4 py-3 font-semibold text-white transition hover:from-purple-700 hover:via-purple-800 hover:to-purple-900"
                                        >
                                            Done
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                placeholder="Your name"
                                                className="mt-1 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder="you@company.com"
                                                className="mt-1 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                                            />
                                        </div>

                                        {error && (
                                            <p className="text-sm text-red-600">{error}</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 px-4 py-3 font-semibold text-white transition hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg
                                                        className="h-5 w-5 animate-spin"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                            fill="none"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        />
                                                    </svg>
                                                    Joining...
                                                </span>
                                            ) : (
                                                "Join the Waitlist"
                                            )}
                                        </button>

                                        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                                            We respect your privacy. No spam, ever.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// Context for managing waitlist modal state globally
import { createContext, useContext } from "react";

interface WaitlistContextType {
    openWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | null>(null);

export const useWaitlist = () => {
    const context = useContext(WaitlistContext);
    if (!context) {
        throw new Error("useWaitlist must be used within a WaitlistProvider");
    }
    return context;
};

export const WaitlistProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openWaitlist = () => setIsOpen(true);
    const closeWaitlist = () => setIsOpen(false);

    return (
        <WaitlistContext.Provider value={{ openWaitlist }}>
            {children}
            <WaitlistModal isOpen={isOpen} onClose={closeWaitlist} />
        </WaitlistContext.Provider>
    );
};

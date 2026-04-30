import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";

export default function SignIn() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async () => {
        setLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/docs/test");
        } catch (error) {
            console.error("Google sign in failed:", error);
            alert("Google sign in failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full min-h-screen flex items-center justify-center p-4 bg-primary">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-bold text-secondary mb-2">Sign In</h1>
                <p className="text-gray mb-6">Continue with Google to edit docs.</p>
                <button
                    onClick={handleSignIn}
                    disabled={loading}
                    className="w-full p-3 rounded-xl cursor-pointer hover:bg-primary border disabled:opacity-60 flex items-center justify-center gap-2"
                >
                    <img className="w-6 h-6" src="/images/docs/google.svg" alt="google-signin" />
                    <span>{loading ? "Signing in..." : "Sign in with Google"}</span>
                </button>
                <Link to="/" className="mt-4 block text-center text-secondary hover:underline">Back to Home</Link>
            </div>
        </main>
    );
}

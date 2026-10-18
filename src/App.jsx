
import { useRef, useState } from "react";

export default function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value;

    if (!username || !password) {
      alert("Please enter both username and password!");
      return;
    }

    setSubmittedData({ username, password });
  }

  function handleReset() {
    setSubmittedData(null);
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    usernameRef.current.focus();
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center
      overflow-hidden bg-slate-950 px-4 py-12 text-white">

      {/* Decorative background */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full
        bg-purple-600/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full
        bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center
            justify-center rounded-2xl border border-white/20
            bg-white/10 text-3xl shadow-lg backdrop-blur-xl">
            🔐
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight">
            Login<span className="text-cyan-400">X</span>
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Uncontrolled Form & Submission
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl border border-white/15
          bg-white/[0.07] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">

          {!submittedData ? (
            <>
              <h2 className="text-2xl font-bold">
                Welcome Back! <span>👋</span>
              </h2>

              <p className="mb-7 mt-2 text-sm text-slate-400">
                Enter your details to continue your journey.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Username */}
                <div>
                  <label htmlFor="username"
                    className="mb-2 block text-sm font-semibold text-slate-200">
                    Username
                  </label>

                  <input
                    id="username"
                    type="text"
                    ref={usernameRef}
                    placeholder="Enter your username"
                    autoComplete="username"
                    required
                    className="w-full rounded-xl border border-white/15
                      bg-slate-900/70 px-4 py-3.5 text-white
                      outline-none transition placeholder:text-slate-500
                      focus:border-cyan-400 focus:ring-2
                      focus:ring-cyan-400/20"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-slate-200">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      ref={passwordRef}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                      className="w-full rounded-xl border border-white/15
                        bg-slate-900/70 px-4 py-3.5 pr-20 text-white
                        outline-none transition placeholder:text-slate-500
                        focus:border-cyan-400 focus:ring-2
                        focus:ring-cyan-400/20"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2
                        -translate-y-1/2 rounded-lg px-2 py-1
                        text-xs font-semibold text-cyan-300
                        hover:bg-white/10"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-3 w-full rounded-xl bg-gradient-to-r
                    from-cyan-500 via-blue-500 to-violet-600
                    px-4 py-3.5 font-bold text-white shadow-lg
                    shadow-blue-500/20 transition duration-300
                    hover:-translate-y-1 hover:shadow-xl
                    hover:shadow-blue-500/30 active:scale-[0.98]"
                >
                  Login <span className="ml-1">→</span>
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2
                text-xs text-slate-400">
                <span className="text-emerald-400">●</span>
                React useRef • Uncontrolled Components
              </div>
            </>
          ) : (
            /* Submission Result */
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center
                justify-center rounded-full border border-emerald-400/30
                bg-emerald-400/10 text-3xl text-emerald-400">
                ✓
              </div>

              <h2 className="text-center text-2xl font-extrabold">
                Form Submitted!
              </h2>

              <p className="mb-6 mt-2 text-center text-sm text-slate-400">
                Your form was submitted successfully.
              </p>

              <div className="space-y-4 rounded-2xl border
                border-white/10 bg-slate-900/60 p-4">

                <div>
                  <p className="text-xs font-semibold uppercase
                    tracking-widest text-cyan-400">
                    Username
                  </p>
                  <p className="mt-1 break-all text-lg font-semibold">
                    {submittedData.username}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold uppercase
                    tracking-widest text-cyan-400">
                    Password
                  </p>
                  <p className="mt-1 break-all text-lg font-semibold">
                    {submittedData.password}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-center text-sm text-emerald-300">
                ✨ Great! Your form data has been retrieved using refs.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 w-full rounded-xl border border-white/15
                  bg-white/10 px-4 py-3 font-semibold transition
                  hover:bg-white/20"
              >
                ← Back to Login
              </button>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Crafted with React + Tailwind CSS
        </p>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

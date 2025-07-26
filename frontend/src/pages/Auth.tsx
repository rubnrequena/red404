import { useState } from "react";
import MetaIcon from "../assets/icons/MetaIcon";
import GoogleIcon from "../assets/icons/GoogleIcon";
function Auth() {
  const [requestCode, setRequestCode] = useState(false);

  function getVerificationCode(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setRequestCode(true);
    console.log("requesting verification codes");
  }
  function googleAuth(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("logging with google");
  }
  function metaAuth(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("logging with meta");
  }
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-base">
      <h1 className="text-3xl text-red-300 mb-10">red404</h1>
      <div className="auth-providers flex flex-col gap-5 mb-5 ">
        <button
          className="google w-64 flex items-center justify-center gap-1.5 px-5 py-2 border border-stone-700 rounded-xl cursor-pointer "
          onClick={googleAuth}
        >
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>
        <button
          className="meta w-64 flex items-center justify-center gap-1.5 px-5 py-2 border border-stone-700 rounded-xl cursor-pointer "
          onClick={metaAuth}
        >
          <MetaIcon />
          <span>Continue with Meta</span>
        </button>
      </div>
      {!requestCode ? (
        <form
          className="flex flex-col items-center"
          action="/backend/login"
          method="POST"
        >
          <div className="flex flex-col gap-3">
            <label className="self-start" htmlFor="email">
              Email
            </label>
            <input
              className=" w-64 border border-stone-700 rounded-xl p-2 focus:outline-0"
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
            <button
              className="flex items-center justify-center gap-1.5 px-5 py-2 border border-stone-700 rounded-xl cursor-pointer "
              type="submit"
              onClick={getVerificationCode}
            >
              <span>Continue</span>
            </button>
          </div>
        </form>
      ) : (
        <form className="" action="/verify-code">
          <div className="flex flex-col  gap-3">
            <label className="self-start" htmlFor="verification-code">
              Verification code
            </label>
            <input
              className="border border-stone-700 rounded-xl p-2 focus:outline-0"
              type="text"
              name="verification-code"
              id="verification-code"
              placeholder="enter code"
            />
            <span className="text-stone-400 text-sm">
              We've sent you a verification code at your email
              <address></address>
            </span>
            <button
              className="flex items-center justify-center gap-1.5 px-5 py-2 border border-stone-700 rounded-xl cursor-pointer"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </main>
  );
}
export default Auth;

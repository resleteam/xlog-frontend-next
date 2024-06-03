"use client";

import Link from "next/link";
import axios from "axios";
import { useState, FormEventHandler, useEffect } from "react";
import SideImage from "../../../components/ui/sideImage";
import { DM_Serif_Display } from "next/font/google";
import { z } from "zod";

const dM_Serif_Display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const nameSchema = z.string().min(3, "Minimal name length is 3");
const emailSchema = z.string().email("Email is not correct");
const passwordSchema = z.string().min(8, "Minimal password length is 8");

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [showSuccessCard, setShowSuccessCard] = useState(false); 

  const getNameErrors = (): z.ZodIssue[] => {
    try {
      nameSchema.parse(name);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return err.issues;
      }
    }
    return [];
  };
  const getEmailErrors = (): z.ZodIssue[] => {
    try {
      emailSchema.parse(email);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return err.issues;
      }
    }
    return [];
  };

  const getPasswordErrors = (): z.ZodIssue[] => {
    try {
      passwordSchema.parse(password);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return err.issues;
      }
    }
    return [];
  };
  const getRepPasswordErrors = (): string[] => {
    if (repPassword != password) return ["Passwords must be same"];
    return [];
  };

  const [nameErrors, setNameErrors] = useState<z.ZodIssue[]>([]);
  const [emailErrors, setEmailErrors] = useState<z.ZodIssue[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<z.ZodIssue[]>([]);
  const [repPasswordErrors, setRepPasswordErrors] = useState<string[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("register button works");
    setShowSuccessCard(true);
    setNameErrors(getNameErrors());
    setEmailErrors(getEmailErrors());
    setPasswordErrors(getPasswordErrors());
    setRepPasswordErrors(getRepPasswordErrors());

    setShowSuccessCard(true);
    //TODO: add SWR POST request to server, and rewrite code below
    // try {
    //   const formData = { name, email, password };
    //   const response = await axios.post(
    //     process.env.BACKEND_URL as string,
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccessCard) {
      timer = setTimeout(() => {
        setShowSuccessCard(false);
        window.location.href = '/auth/login'
      }, 3000); // 3 Секунд
    }
    return () => clearTimeout(timer);
  }, [showSuccessCard]);

  return (
    <div className="flex h-full divide-x-8 divide-secondary">
      <SideImage title="Registration"></SideImage>
      {showSuccessCard && (
        <div className="absolute top-0 right-0 mt-4 mr-4 bg-green-500 text-white p-2 rounded">
          Sucess!
          <br></br>
          Now You can Login
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" style={{ marginLeft: "150px", marginBottom: "1px", marginTop: "-50px" }}>

            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M2508 4931 c-45 -15 -87 -50 -108 -91 -17 -33 -20 -59 -20 -159 l0
            -120 -57 -11 c-340 -67 -615 -216 -843 -457 -246 -260 -385 -581 -410 -948 -5
            -71 -9 -417 -10 -767 l0 -638 -140 -192 c-80 -110 -149 -217 -161 -248 -29
            -73 -31 -203 -6 -280 38 -116 132 -216 247 -263 53 -21 68 -22 456 -25 l401
            -3 17 -59 c27 -91 83 -177 176 -271 71 -72 100 -94 180 -133 126 -61 200 -79
            330 -79 130 0 204 18 330 80 79 39 109 61 180 132 88 88 151 190 181 289 l12
            42 376 0 c410 0 450 4 540 57 144 84 232 270 202 429 -18 97 -38 135 -185 336
            l-136 186 0 629 c0 665 -8 858 -39 1001 -81 369 -285 685 -589 910 -187 138
            -382 222 -634 272 l-58 11 0 120 c0 139 -15 182 -78 224 -41 27 -112 39 -154
            26z m178 -736 c94 -9 238 -51 341 -100 357 -169 596 -494 653 -890 6 -42 10
            -370 10 -812 0 -474 4 -751 10 -768 6 -15 80 -123 165 -240 153 -210 171 -245
            143 -273 -17 -17 -2879 -17 -2896 0 -28 28 -10 63 143 273 85 117 159 225 165
            240 6 17 10 294 10 768 0 752 3 815 40 957 117 454 526 804 993 849 80 8 97 8
            223 -4z m174 -3486 c-21 -38 -91 -98 -148 -126 -50 -25 -68 -28 -152 -28 -84
            0 -102 3 -152 28 -57 28 -127 88 -148 126 l-11 21 311 0 311 0 -11 -21z"/>
            <path d="M1205 4826 c-42 -19 -198 -159 -282 -254 -293 -331 -478 -708 -553
            -1123 -28 -159 -45 -403 -31 -456 23 -83 93 -135 181 -135 114 1 180 83 180
            222 0 105 18 250 47 380 84 379 280 718 577 995 68 63 119 119 125 137 44 125
            -42 249 -171 248 -24 -1 -56 -7 -73 -14z"/>
            <path d="M3765 4826 c-64 -29 -105 -94 -105 -165 0 -68 18 -95 136 -205 236
            -222 410 -483 513 -773 67 -186 111 -427 111 -603 0 -139 66 -221 180 -222 88
            0 158 52 181 134 14 52 -3 301 -31 455 -82 456 -305 880 -635 1208 -155 154
            -189 178 -263 182 -34 2 -69 -2 -87 -11z"/>
            </g>
          </svg>
        </div>
      )}
      <div className="flex-1">
        <div className="bg-primary w-full h-full flex justify-center items-center">
          <div className="mx-auto max-w-screen-2xl px-4 w-full md:px-8max-w-lg">
            <div className="mx-auto w-3/4">
              <div className="flex flex-col gap-4 font-light">
                <div>
                  <h2
                    className={
                      dM_Serif_Display.className +
                      " text-left text-2xl font-regular text-white lg:text-5xl"
                    }
                  >
                    Register
                  </h2>
                  <h4 className="text-mainGray">Let`s sing up you quickly</h4>
                </div>
                <div>
                  <input
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter your name"
                    className={
                      "w-full border border-secondary bg-primary px-5 py-4 text-mainGray outline-none border-2 transition duration-100 pl-7 focus:ring"
                    }
                  />
                  <ul>
                    {nameErrors.map((error, index) => (
                      <li className="text-error" key={index}>
                        {error.message}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <input
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email"
                    className={
                      "w-full border border-secondary bg-primary px-5 py-4 text-mainGray outline-none border-2 transition duration-100 pl-7 focus:ring"
                    }
                  />
                  <ul>
                    {emailErrors.map((error, index) => (
                      <li className="text-error" key={index}>
                        {error.message}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="w-full border border-secondary bg-primary px-5 py-4 text-mainGray outline-none border-2 transition duration-100 pl-7 focus:ring "
                  />
                  <ul>
                    {passwordErrors.map((error, index) => (
                      <li className="text-error" key={index}>
                        {error.message}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <input
                    type="password"
                    name="repPassword"
                    placeholder="Confirm your password"
                    onChange={(e) => setRepPassword(e.target.value)}
                    value={repPassword}
                    className="w-full border border-secondary bg-primary px-5 py-4 text-mainGray outline-none border-2 transition duration-100 pl-7 focus:ring "
                  />
                  <ul>
                    {repPasswordErrors.map((error, index) => (
                      <li className="text-error" key={index}>
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between">
                  <button
                    className="w-1/4 block-lg bg-secondary px-8 py-3 text-center text-xl font-semibold text-primary outline-none ring-white transition duration-100 hover:ring md:text-base"
                    onClick={handleClick}
                  >
                    SING UP
                  </button>
                  <div className="flex items-center justify-center p-4">
                    <p className="text-center text-n text-white">
                      Alredy have account?{" "}
                      <Link
                        href="/auth/login"
                        className="text-secondary transition duration-100 hover:text-indigo-600"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <span className="absolute inset-x-0 h-px bg-mainGray"></span>
                  <span className="relative bg-mainGray px-4 text-sm text-white">
                    OR
                  </span>
                </div>

                <button className="flex items-center justify-center gap-2-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
                  <svg
                    className="h-5 w-5 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "8px"}}
                  >
                    <path
                      d="M12 0C5.37273 0 0 5.37273 0 12C0 18.0164 4.43182 22.9838 10.2065 23.8516V15.1805H7.23764V12.0262H10.2065V9.92727C10.2065 6.45218 11.8996 4.92655 14.7878 4.92655C16.1711 4.92655 16.9025 5.02909 17.2489 5.076V7.82945H15.2787C14.0525 7.82945 13.6244 8.99182 13.6244 10.302V12.0262H17.2178L16.7302 15.1805H13.6244V23.8773C19.4815 23.0825 24 18.0747 24 12C24 5.37273 18.6273 0 12 0Z"
                      fill="white"
                    />
                  </svg>
                  Continue with Facebook
                </button>

                <button className="flex items-center justify-center gap-2-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                  <svg
                    className="h-5 w-5 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "12px"}}
                  >
                    <path
                      d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

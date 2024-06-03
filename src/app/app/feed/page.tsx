"use client";

import Link from "next/link";
import axios from "axios";
import { useState, FormEventHandler, useEffect } from "react";
import SideImage from "../../../components/ui/homePage";
import { DM_Serif_Display } from "next/font/google";
import { z } from "zod";

const dM_Serif_Display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});


export default function Page() {
  const [showSuccessCard, setShowSuccessCard] = useState(false); 

  useEffect(() => {
    const showSuccess = localStorage.getItem('showSuccessCard2');
    if (showSuccess === 'true') {
      setShowSuccessCard(true);
      localStorage.removeItem('showSuccessCard2');
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccessCard) {
      timer = setTimeout(() => {
        setShowSuccessCard(false);
      }, 4000); // 4 Секунд
    }
    return () => clearTimeout(timer);
  }, [showSuccessCard]);


  return (
    <div className="flex h-full divide-x-8 divide-secondary">
      <SideImage></SideImage>
      {showSuccessCard && (
        <div className="absolute top-0 right-0 mt-4 mr-4 bg-green-500 text-white p-2 rounded">
          Sucess!
          <br></br>
          Logged in.
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" style={{ marginLeft: "100px", marginBottom: "1px", marginTop: "-50px" }}>

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
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


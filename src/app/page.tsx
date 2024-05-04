"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/register");
    }
  }, []);

  return <></>;
}

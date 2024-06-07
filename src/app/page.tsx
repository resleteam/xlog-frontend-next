"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../app/auth/login/page';

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/register");
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}

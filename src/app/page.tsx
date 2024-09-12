import DefaultLayout from "./layout/DefaultLayout";
import AppProvider from "./components/AppProvider";
import { type ContextProps } from "./components/AppProvider";
import { useState } from "react";
import { title } from "process";
import Home from "./home/page";
export const metadata = {
  title: 'Home'
}
export default function Page() {
  return (
      <Home />
        
  );
}

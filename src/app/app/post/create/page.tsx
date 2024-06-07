"use client";

import Link from "next/link";
import axios from "axios";
import React, { useState, FormEventHandler, useEffect } from 'react';
import SideImage from "../../../../components/ui/createPost";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { DM_Serif_Display } from "next/font/google";
import { z } from "zod";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';


const dM_Serif_Display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});


export default function Page() {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setName(`@${storedName}`); // Використовуємо строковий літерал шаблону для зручності
    }
  }, []);
  

  
  return (
    <div className="flex h-full divide-x-8 divide-secondary">
      <SideImage />
      <div className="flex-1">
        <div className="bg-primary w-full h-full flex justify-center items-center">
          <div className="mx-auto max-w-screen-2xl px-4 w-full md:px-8 max-w-lg">
              <Card title="Creating Post">
              <form className="flex flex-col">
                <InputText
                  type="text"
                  value={name}
                  disabled={true}
                  placeholder="Ім'я"
                  className="w-full"
                />
                <Calendar
                  value={date}
                  placeholder="Дата"
                  className="w-full"
                />
                <InputText
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Назва поста"
                  className="w-full"
                />
                <InputTextarea 
                  autoResize 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Текст поста"
                  className="w-full p-inputtext p-component"
                />
                <InputText
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Теги"
                  className="w-full"
                />
                <Button type="submit" label="Create Post" className="p-button-success my-2" />
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div> 
  );
}
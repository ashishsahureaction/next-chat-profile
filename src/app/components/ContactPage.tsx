'use client'
import React, { useState } from 'react';
import { useEffect, useRef } from "react";
import emailjs from 'emailjs-com';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
      inputRef.current?.focus();    
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
  
    emailjs
      .sendForm('service_oe9gyga', 'template_78r1ias', e.currentTarget, 'HPCGx-ICXNC7hJhon')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload();
        },
        (error: any) => {
          console.error('Failed to send the message:', error);
          alert('Failed to send the message, please try again');
        }
      );
  };
  

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="span">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
            ref={inputRef}
          />
        </div>
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
            ref={inputRef}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
            ref={inputRef}
       
          />
        </div>
        <div>
          <label htmlFor="message" className="block">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 "
            rows={5}
            required
            
            
          ></textarea>
        </div>
        <div>
          <button type="submit" className="hover:underline hover:scale-95  border py-2 px-4 rounded-md 
          ">Send</button>
        </div>
    
        

        
      </form>
    </div>
  );
};

export default ContactPage;



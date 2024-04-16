'use client'

import React, { useState, FormEvent } from 'react';
import Swal, { SweetAlertResult } from 'sweetalert2';

// Define the showAlert function
const showAlert = (): void => {
    let timerInterval: NodeJS.Timeout;
    Swal.fire({
        title: "Thank You..!!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup()!.querySelector("b");
            timerInterval = setInterval(() => {
                if (timer) {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result: SweetAlertResult) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

// Define the Sweet component
const Sweet: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleAlert = (): void => {
        showAlert();
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        // Here you can handle the subscription logic, like calling an API
        handleAlert();
    };

    return (
        <div className="flex">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
               className="w-3/5 p-3 rounded-l-lg sm:w-2/3" fdprocessedid="2zc3eu"
               required
            />
            <button
                onClick={handleSubmit}
                type="submit"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-orange-600 text-white hover:bg-orange-500"
            >
                Subscribe
            </button>
        </div>
    );
};

export default Sweet;

import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('idle');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);
    // replace with your generated Formspree endpoint
    const response = await fetch('https://formspree.io/f/meqbdvdr', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });
    if (response.ok) {
      setStatus('sent');
      form.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } else {
      setStatus('error');
    }
  };
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          name="name"
          placeholder="Name"
          className="w-full p-2 rounded bg-bg border border-text/30"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-bg border border-text/30"
          required
        />
        <input
          name="subject"
          placeholder="Subject"
          className="w-full p-2 rounded bg-bg border border-text/30"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-2 rounded bg-bg border border-text/30 h-32"
          required
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-6 py-2 rounded bg-accent text-bg font-semibold flex items-center gap-2"
        >
          {status === 'sending' && (
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                className="opacity-25"
              />
              <path
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
                className="opacity-75"
              />
            </svg>
          )}
          {status === 'sent' ? '✔ Submitted!' : 'Submit'}
        </button>
        {status === 'error' && (
          <p className="text-warn">Oops! Something went wrong.</p>
        )}
      </form>
    </section>
  );
}

export default Contact;

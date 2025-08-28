"use client";

import { useEffect, useRef, useState } from 'react';

export default function ResumePage() {
  const resumeUrl = "https://drive.google.com/file/d/1YyFT-E3qnjJ8F_CxcNalUW565lX5ZkcV/view?usp=sharing";
  const [progress, setProgress] = useState(0);
  const [cancelled, setCancelled] = useState(false);
  const [showInline, setShowInline] = useState(false);
  const timerRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const start = Date.now();
    const duration = 750; // fast, minimal wait

    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(p);
      if (p >= 100 && intervalRef.current) window.clearInterval(intervalRef.current);
    }, 40);

    timerRef.current = window.setTimeout(() => {
      if (!cancelled) window.location.assign(resumeUrl);
    }, duration + 100);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [cancelled, resumeUrl]);

  const cancelRedirect = () => {
    setCancelled(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  return (
    <div className="min-h-screen bg-[#0f0a0a] text-[#e7e7e7] flex items-center justify-center px-4">
      <main className="w-full max-w-lg">
        <header className="mb-5">
          <h1 className="text-sm font-semibold tracking-tight text-white">Redirecting to resume</h1>
          <p className="mt-1 text-[13px] text-white/60">Your document will open on Google Drive shortly.</p>
        </header>

        <section className="rounded-lg border border-white/10 bg-black/50 p-4">
          <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden" aria-label="Loading progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
            <div
              className="h-full bg-[linear-gradient(90deg,rgba(239,68,68,1)_0%,rgba(244,63,94,1)_100%)] transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-[12px] text-white/60">
            <span>{cancelled ? "Redirect cancelled" : `${progress}%`}</span>
            {!cancelled && (
              <button onClick={cancelRedirect} className="text-red-300 hover:text-red-200 underline-offset-2 hover:underline">
                Cancel
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-red-300 hover:text-red-200 underline-offset-2 hover:underline"
            >
              Open in new tab
            </a>
            <button
              onClick={() => {
                cancelRedirect();
                setShowInline(true);
              }}
              className="text-[13px] text-red-300 hover:text-red-200 underline-offset-2 hover:underline"
            >
              View inline
            </button>
          </div>

          {showInline && (
            <div className="mt-4 h-[70vh] rounded-md border border-white/10 overflow-hidden">
              <iframe
                src={resumeUrl.replace("/view?", "/preview?")}
                className="w-full h-full border-0"
                title="Resume Preview"
                allow="autoplay"
              />
            </div>
          )}
        </section>

        <footer className="mt-5 text-[11px] text-white/60">
          If you are not redirected automatically, use the options above.
        </footer>
      </main>
    </div>
  );
}

import React from 'react';
import { X, Youtube, ExternalLink } from 'lucide-react';

export default function MasterclassVideoModal({ videoData, onClose }) {
  if (!videoData) return null;

  const { videoId, title, instructor } = videoData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-navy-900 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-navy-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center">
              <Youtube className="w-4 h-4 text-rose-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-serif font-bold text-ivory-50 line-clamp-1">
                {title || "Masterclass Video Reference"}
              </h3>
              <p className="text-[11px] text-ivory-400/80">
                Instructor: {instructor || "Indian Classical Vocal Guru"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ivory-400 hover:text-gold-300 transition-colors"
              title="Open directly on YouTube"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-ivory-400 hover:text-white rounded-xl hover:bg-white/[0.05] transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 16:9 Responsive Embedded Video Container */}
        <div className="relative w-full pt-[56.25%] bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer Note */}
        <div className="px-6 py-3 bg-navy-950/90 border-t border-white/[0.06] text-xs text-ivory-400/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            Practice along with the video while using RaagSpace's Tanpura & Sur Meter.
          </span>
          <span className="text-[11px] text-gold-400/80">
            Source: YouTube Educational Classical Content
          </span>
        </div>
      </div>
    </div>
  );
}

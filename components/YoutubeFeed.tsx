import React, { useEffect, useState } from 'react';
import { Youtube, ExternalLink, Play, Clock, ArrowRight } from 'lucide-react';

// --- CONFIGURATION ---
// REPLACE THIS with your actual YouTube Channel ID (starts with UC...)
// You can find it in YouTube Studio > Settings > Channel > Advanced Settings
// or by viewing the source of your channel page and searching for "externalId"
const CHANNEL_ID = 'UCRoJeyAk-MKsvd5POeAsQQA'; 

interface Video {
  id: string;
  videoId: string;
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  author: string;
}

// Fallback videos to show if fetch fails or Channel ID is invalid
const FALLBACK_VIDEOS: Video[] = [
  {
    id: "1",
    videoId: "M7lc1UVf-VE", 
    title: "How We Built A Client Acquisition Infrastructure",
    link: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
    thumbnail: "https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
    pubDate: "2024-03-01",
    author: "Marketing 31"
  },
  {
    id: "2",
    videoId: "LXb3EKWsInQ",
    title: "Stop Running Ads To Cold Traffic (Do This Instead)",
    link: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    pubDate: "2024-02-15",
    author: "Marketing 31"
  },
  {
    id: "3",
    videoId: "jNQXAC9IVRw",
    title: "The 'Trust Gap' Is Killing Your Agency's Growth",
    link: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    pubDate: "2024-01-20",
    author: "Marketing 31"
  }
];

const getRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) return `${diffInWeeks}w ago`;
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths}mo ago`;
  return `${Math.floor(diffInDays / 365)}y ago`;
};

const YoutubeFeed: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(FALLBACK_VIDEOS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      // If user hasn't set a channel ID, stick to fallback
      if (CHANNEL_ID === 'UC_PLACEHOLDER_CHANNEL_ID') {
          setLoading(false);
          return;
      }

      try {
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok' && data.items) {
          const mappedVideos: Video[] = data.items.slice(0, 3).map((item: any) => ({
             id: item.guid,
             videoId: item.guid.split(':')[2],
             title: item.title,
             link: item.link,
             thumbnail: `https://img.youtube.com/vi/${item.guid.split(':')[2]}/maxresdefault.jpg`,
             pubDate: item.pubDate,
             author: item.author
          }));
          setVideos(mappedVideos);
        }
      } catch (error) {
        console.error("Failed to fetch YouTube videos:", error);
        // Silently fail to fallback
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="py-24 bg-slate-950 relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
               <div className="p-2 bg-red-600/10 rounded-lg border border-red-600/20">
                  <Youtube className="w-5 h-5 text-red-500" />
               </div>
               <span className="text-red-500 font-mono text-sm tracking-wider uppercase font-bold">The Vault</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Latest Strategy Breakdowns
            </h2>
            <p className="text-slate-400 text-lg">
              We document our entire process. No gatekeeping. Just raw strategy, case studies, and implementation guides.
            </p>
          </div>
          
          <a 
            href={`https://www.youtube.com/channel/${CHANNEL_ID !== 'UC_PLACEHOLDER_CHANNEL_ID' ? CHANNEL_ID : '@MARKETING31-M31'}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 hover:border-red-500 rounded-full transition-all duration-300 text-slate-300 font-medium whitespace-nowrap"
          >
            Visit Channel
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group flex flex-col gap-4">
              {/* Video Container */}
              <a 
                 href={video.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl shadow-black/50 group-hover:border-red-500/30 transition-all duration-300 block"
              >
                <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-all">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300 shadow-xl">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                </div>

                {/* Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Youtube className="w-3 h-3 text-red-500" />
                    WATCH NOW
                </div>
              </a>
              
              {/* Video Info */}
              <div className="space-y-2">
                 <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-tight">
                    <a href={video.link} target="_blank" rel="noopener noreferrer">
                        {video.title}
                    </a>
                 </h3>
                 <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>{getRelativeTime(video.pubDate)}</span>
                    </div>
                    {loading && <span className="text-slate-600 animate-pulse">Updating...</span>}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeFeed;
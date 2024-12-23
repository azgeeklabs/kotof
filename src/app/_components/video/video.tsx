'use client'
import React, { useState, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize,
} from 'lucide-react';

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false
});

interface VideoPlayerProps {
  url: string;
  title?: string;
  thumbnail?: string;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
  onReady?: () => void;
  onStart?: () => void;
  onEnded?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (error: any) => void;
}

interface PlayerState {
  playing: boolean;
  volume: number;
  muted: boolean;
  played: number;
  loaded: number;
  duration: number;
  playbackRate: number;
  fullscreen: boolean;
}

export function VideoPlayer({
  url,
  thumbnail,
  loop = false,
  controls = true,
  width = '100%',
  height = '100%',
  onReady,
  onStart,
  onEnded,
  onError
}: VideoPlayerProps) {
  // Refs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // State
  const [playerState, setPlayerState] = useState<PlayerState>({
    playing: true,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    fullscreen: false
  });

  // Handlers
  const handlePlayPause = useCallback(() => {
    setPlayerState(prev => ({ ...prev, playing: !prev.playing }));
  }, []);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    setPlayerState(prev => ({ ...prev, volume, muted: volume === 0 }));
  }, []);

  const handleToggleMute = useCallback(() => {
    setPlayerState(prev => ({ ...prev, muted: !prev.muted }));
  }, []);

  const handleProgress = useCallback((state: { played: number; loaded: number }) => {
    setPlayerState(prev => ({ ...prev, ...state }));
  }, []);

  const handleDuration = useCallback((duration: number) => {
    setPlayerState(prev => ({ ...prev, duration }));
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setPlayerState(prev => ({ ...prev, fullscreen: true }));
    } else {
      document.exitFullscreen();
      setPlayerState(prev => ({ ...prev, fullscreen: false }));
    }
  }, []);

  // Format time helper
  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video bg-black rounded-lg overflow-hidden"
    >
      <ReactPlayer
        ref={playerRef}
        url={url}
        width={width}
        height={height}
        playing={playerState.playing}
        loop={loop}
        volume={playerState.volume}
        muted={playerState.muted}
        playbackRate={playerState.playbackRate}
        onReady={onReady}
        onStart={onStart}
        onEnded={onEnded}
        onError={onError}
        onProgress={handleProgress}
        onDuration={handleDuration}
        progressInterval={1000}
        config={{
          file: {
            attributes: {
              poster: thumbnail
            }
          }
        }}
      />

      {/* Custom Controls */}
      {controls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-600 rounded cursor-pointer mb-4">
            <div 
              className="h-full bg-blue-500 rounded"
              style={{ width: `${playerState.played * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            {/* Play/Pause */}
            <button 
              onClick={handlePlayPause}
              className="text-white hover:text-blue-500 transition-colors"
            >
              {playerState.playing ? <Pause size={24} /> : <Play size={24} />}
            </button>

            {/* Volume Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handleToggleMute}
                className="text-white hover:text-blue-500 transition-colors"
              >
                {playerState.muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.1}
                value={playerState.muted ? 0 : playerState.volume}
                onChange={handleVolumeChange}
                className="w-20"
              />
            </div>

            {/* Time Display */}
            <div className="text-white text-sm">
              {formatTime(playerState.played * playerState.duration)} / 
              {formatTime(playerState.duration)}
            </div>

            {/* Fullscreen */}
            <button 
              onClick={handleFullscreen}
              className="text-white hover:text-blue-500 transition-colors"
            >
              <Maximize size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
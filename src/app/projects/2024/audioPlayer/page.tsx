"use client"
import Navbar from "@/app/components/Nav/Navbar"
// import ThemeWrapper from "@/app/components/ThemeWrapper"
// import Text from "@/app/components/Text/Text"
// import FileSection from "@/app/components/FileSection"
// import TextImageLink from "@/app/components/About/TextImageLink"
import Head from "next/head"
import PageMargin from "@/app/components/PageMargin"
import { useEffect, useRef, useState } from "react";

export default function F(){
    const [mp3Url, setMp3Url] = useState<string | null>(null);
    const [filename, setFilename] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const next = async () => {
        try {
          const res = await fetch(`http://0.0.0.0:8000/nextMp3?t=${Date.now()}`); //diff request to prevent caching
          if (!res.ok) throw new Error('Failed to fetch');

        //   const contentDisposition = res.headers.get('Content-Disposition');
        //   const match = contentDisposition?.match(/filename*="(.+)"/);
        //   const extractedFilename = match?.[1] || 'unknown.mp3';
        //   console.log( contentDisposition);
        //   setFilename(extractedFilename);
    
        //   // Blob response so we can create a URL
        //   const blob = await res.blob();
        //   const url = URL.createObjectURL(blob);
        //   setMp3Url(url);

        const json = await res.json();
        const { filename, data } = json;
        setFilename(filename);

        // Create a Blob URL from base64
        const blob = new Blob([Uint8Array.from(atob(data), c => c.charCodeAt(0))], { type: "audio/mpeg" });
        const url = URL.createObjectURL(blob);
        setMp3Url(url);
        } catch (error) {
          console.error('Error fetching MP3:', error);
        }
      };
    const previous = async () => {
        try {
            const res = await fetch(`http://0.0.0.0:8000/previousMp3?t=${Date.now()}`); //diff request to prevent caching
            if (!res.ok) throw new Error('Failed to fetch');
  
            const json = await res.json();
            const { filename, data } = json;
            setFilename(filename);

            // Create a Blob URL from base64
            const blob = new Blob([Uint8Array.from(atob(data), c => c.charCodeAt(0))], { type: "audio/mpeg" });
            const url = URL.createObjectURL(blob);
            setMp3Url(url);
          } catch (error) {
            console.error('Error fetching MP3:', error);
          }
    }
    // const startStopVideo = () => {
        
    // }
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
    
        const handleEnded = () => {
            next();
        };

        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
      });
     
    return(
        <>
             <Head>
                <title>Playlist1</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>

            <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    Playlist1
                </h1>
            </center>
            <PageMargin>
                
                <button
                    onClick={previous}
                    className="bg-cblue80 text-c00 px-4 py-2 rounded hover:bg-cbluec0 transition"
                >
                    prev mp3
                </button>
                <button
                    onClick={next}
                    className="bg-cblue80 text-c00 px-4 py-2 rounded hover:bg-cbluec0 transition"
                >
                    new mp3
                </button>
                {mp3Url && (
                    <audio autoPlay ref={audioRef} controls src={mp3Url} className="w-full mt-4" />
                )}
                {filename && (
                    <div className=" text-c00">{filename}</div>
                )}
                {/* <button onClick={startStopVideo()}>Start/Stop</button>
                <button onclick="prevVideo()">PrevAudio</button>
                <button onclick="newVideo()">NewAudio</button>
                <button onclick="(()=>{forwardAudio(-10)})()">-10s</button>
                <button onclick="(()=>{forwardAudio(10)})()">+10s</button>
                <button onclick="(()=>{increaseVolume(-1/16)})()">volume-1/16</button>
                <button onclick="(()=>{increaseVolume(1/16)})()">volume+1/16</button> */}
            </PageMargin>
            </div>
        </>
        
    )
}

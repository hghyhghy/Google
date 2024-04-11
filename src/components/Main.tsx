'use client'
import "regenerator-runtime"
import { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';
import { AiFillCamera } from 'react-icons/ai';
import { useRouter } from "next/navigation";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Main: React.FC = () => {
    const [search, setSearch] = useState<any>('');
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
    const router = useRouter();

    const googleLogo: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        router.push(`https://google.com/search?q=${search}`);
    }

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
    }

    const stopListening = () => {
        SpeechRecognition.stopListening()
        setSearch(transcript);
    }


    if (!browserSupportsSpeechRecognition) {
        return null;
    }
    
    return (
        <div className="flex flex-col items-center mt-28">
           <Image
             src={googleLogo}
             alt="g"
              width={270}
              height={100}
           />
            <form onSubmit={(e) => onSearchSubmit(e)} className="flex border mt-7 px-5 py-2 rounded-full w-2/5 items-center hover:shadow-md">
                <AiOutlineSearch className="text-xl text-slate-400" />
                <input 
                    type="text" 
                    className="w-full focus:outline-none ml-4" 
                    value={search || transcript}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {
                    listening ? 
                        <BsFillMicFill 
                            onClick={stopListening}
                            className="text-3xl text-slate-400 mr-5" 
                        />
                    : <BiMicrophone 
                        onClick={startListening}
                        className="text-3xl text-slate-400 mr-5" 
                    />

                }

                 <AiFillCamera className="text-3xl text-slate-400" />
               
            </form>
            <div className="flex mt-7">
                <button 
                    className="bg-slate-200 mr-3 py-2 px-4 text-sm rounded hover:bg-slate-300"
                    onClick={(e) => onSearchSubmit(e)}>Google Search</button>
                <button 
                    className="bg-slate-200 py-2 px-4 text-sm  rounded hover:bg-slate-300"
                    onClick={() => router.push('https://www.google.com/doodles')}>I'm Feeling Lucky</button>
            </div>
        </div>
    )
}

export default Main;

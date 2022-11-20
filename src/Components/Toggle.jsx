import { useState } from "react";

export default function Toggle(props) {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={ ()=> {
            props.toggleMode() 
                setEnabled(!enabled);
                            
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-gray-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    <span className={`text-sm ${props.mode =='bg-gray-900'?'text-white':'text-gray-900'}`}>
                        {props.mdtxt}   </span>
                </label>
            </div>
        
    );
}

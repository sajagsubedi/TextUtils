import React,{ useState } from "react"

export default function TextForm(props) {
    const[text, setText]=useState("")


    let handleUpClick=()=>{
      let newtxt=text.toUpperCase()
        setText(newtxt)
        props.showAlert("Text Converted to UpperCase Successfully","bg-green-400")
    }


        let handleChange=(event)=>{
            setText(event.target.value)
        }
    let handleLwClick=()=>{
      let newtxt=text.toLowerCase()
        setText(newtxt) ;    props.showAlert("Text Converted to LowerCase Successfully","bg-green-400")

    }
    let handleClClick=()=>{
            props.showAlert("Text  Cleared","bg-green-400");

        setText("")
    }
    let handleCpClick=()=>{
        props.showAlert("Text Copied to clipboard","bg-green-400")

navigator.clipboard.writeText(text)
            }
    
    let handleSpClick=()=>{
        let nt = text.split(/[ ]+/)
props.showAlert("Removed Extra Spaces from the text Successfully","bg-green-400");

        let newText=nt.join(" ")
        setText(newText);
        }
let handleflClick=()=>{
    props.showAlert("Capitalized the text successfully","bg-green-400");

    setText(
      text
        .split(/[ ]+/)
        .filter((elem) => elem.length !== 0)
        .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
        .join(" ")
    );


}
    return (
        
<div className={`w-screen  ${props.mode =='bg-gray-900'?'text-white':'text-gray-900'} flex-col justify-center items-center h-50`}>
<div className="w-10/12 mx-auto container">
<h1 className="font-extrabold text-4xl sm:text-4xl md:text-5xl">Enter the text to analyze below</h1>
    <div className="md:px-6">
    <div className="md:mx-5" >
        <textarea id="box"
            value={text} onChange={handleChange} className={` w-full my-3 mx-auto h-[10rem] border rounded border-gray-700 ${props.mode =='bg-gray-900' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-900'} outline-none focus:border-blue-500 focus:${props.mode} focus:ring-2 focus:ring-blue-900  text-base resize-none leading-6 transition-colors duration-200 ease-in-out`}>
        </textarea>
        
                               <div className="flex flex-wrap">
    <button disabled= {text.length==0?true:false} onClick={handleUpClick} className="py-1 px-1 bg-blue-600 text-white disabled:bg-blue-500 rounded border-none mx-2 my-2 hover:bg-blue-700">To UpperCase</button>
        <button disabled= {text.length==0?true:false} onClick={handleLwClick} className="py-1 px-1 disabled:bg-blue-500  bg-blue-600 text-white rounded border-none mx-2 my-2 hover:bg-blue-700"> To LowerCase</button>
    <button disabled= {text.length==0?true:false}  onClick={handleSpClick} className="py-1 px-1 disabled:bg-blue-500 bg-blue-600 text-white rounded border-none mx-2 my-2 hover:bg-blue-700"> Remove Extra Spaces</button>
        <button disabled= {text.length==0?true:false}  onClick={handleflClick} className="py-1 px-1 disabled:bg-blue-500 bg-blue-600 text-white rounded border-none mx-2 my-2 hover:bg-blue-700"> Capitalize text</button>

    <button disabled= {text.length==0?true:false}  onClick={handleCpClick} className="py-1 px-1 disabled:bg-blue-500 bg-blue-600 text-white rounded border-none mx-2 my-2 hover:bg-blue-700"> Copy Text</button>
            <button disabled= {text.length==0?true:false}  onClick={handleClClick} className="py-1 px-1 disabled:bg-blue-500 bg-blue-600 text-white rounded border-none mx-2 my-2 hover:bg-blue-700"> Clear Text</button>      

</div>
</div>
    <div className= "md:mx-5   my-7 ">
        <h1 className={`text-violet-500 my-5 font-bold text-4xl`}>Your text-summary</h1>
        <p className={`${props.mode =='bg-gray-900'?'text-white':'text-gray-900'}`}>Your text has {text.split(" ").filter((element)=>{
    return element.length !==0
}).length} words and {text.length} characters</p>
        <hr/>
       {text.length!==0? <h3 className={``}>{text}</h3>:<p className={`text-2xl text-center ${props.mode =='bg-gray-900'?'text-white':'text-gray-900'}font-bold`}>Nothing to preview</p>}
    </div>
        </div>
    </div>
    </div>
    )
}
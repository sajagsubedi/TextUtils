import "./App.css" 
import Header from "./Components/Header.jsx"
import TextForm from "./Components/TextForm.jsx"
import Footer from "./Components/Footer.jsx"
import Alert from "./Components/Alert.jsx"
import { useState } from "react"

export default function App() {
    const[mdtxt,setMdtxt]=useState("Enable dark Mode")
    const[alert,setAlert]=useState(null)
    const[mode,setMode]=useState("bg-gray-300")
    const showAlert=(msg,bg)=>{
setAlert({
    msg:msg,
    bg:bg
})
        setTimeout(()=>{
            setAlert(null)
        },1000)
    }
    
    const toggleMode=()=>{
        if(mode =='bg-gray-300'){
    setMode("bg-gray-900") ;
            showAlert("Dark Mode Enabled Successfully","bg-green-400")
                    document.body.classList.remove("bg-white")

document.body.classList.add("bg-slate-900")
            setMdtxt("Disable Dark mode")
        }
        else{
        document.body.classList.add("bg-white")
                  document.body.classList.remove("bg-slate-900")
  setMode("bg-gray-300")
                        showAlert("Light Mode Enabled Successfully","bg-green-400")

            setMdtxt("Enable dark mode")
        }
    }
   return(
       
       <div>
<Header mode={mode} mdtxt={mdtxt} toggleMode={toggleMode}/>
<hr/>
             <Alert alert={alert}/>

<TextForm showAlert={showAlert} mode={mode}/>

   
           <hr/>
           <Footer mode={mode}/>
    
       </div>
    
       )
}

import Toggle from "./Toggle.jsx"

export default function Header(props) {
    return(
<header className={`${props.mode == 'bg-gray-900'?'text-white':'text-gray-900'} ${props.mode} body-font`}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" className={`flex ${props.mode =='bg-gray-900'?'text-white':'text-gray-900'}title-font font-medium items-center  mb-4 md:mb-0`}>
    <img className="w-10 py-1 px-1 rounded-full border-2 mx-3 border-gray-300 bg-gray-200" src="https://cdn-icons-png.flaticon.com/512/32/32329.png"/>
    
      <span className="ml-3 text-xl">OurTextUtils</span>
    </a>
    <nav className="md:mx-auto flex flex-wrap items-center text-base justify-start">
      <a href="/" className="mr-5 hover:text-white">Home</a>
      </nav>
    <div className="  mt-4 md:mt-0">
    <Toggle toggleMode={props.toggleMode} mdtxt={props.mdtxt} mode={props.mode}/>
    </div>
  </div>
</header>
        )
}
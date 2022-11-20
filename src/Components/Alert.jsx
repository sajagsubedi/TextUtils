export default function Alert(props) {
    return(
        <div className="h-14 w-full">
            {props.alert && <div className={`h-12 w-full px-2 ${props.alert.bg} flex justify-center items-center`}>
    <p>{props.alert.msg}</p> 
</div>}
            </div>
    )
}
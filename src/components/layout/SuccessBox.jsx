
export default function SuccessBox({children}){
    return(
        <div className="p-4 text-center bg-green-100 border border-green-300 rounded-lg">
            {children}
        </div>
    )
}
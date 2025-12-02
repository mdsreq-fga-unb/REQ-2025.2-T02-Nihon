type StatusButtonProps = {
    state: boolean;
}

export default function StatusButton({state}: StatusButtonProps) {
    return(
        <>
            {state ? (
                <div className="h-10 w-20 rounded-full bg-[#ED3135] flex justify-end items-center pr-1">
                    <div className="h-8 w-8 bg-white rounded-full "/>
                </div>
            ):(
                <div className="h-10 w-20 rounded-full bg-gray-300 flex items-center pl-1">
                    <div className="h-8 w-8 bg-white rounded-full "/>
                </div>
            )}
        </>
        
    );
}
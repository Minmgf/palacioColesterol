import Image from "next/image";
import toast from "react-hot-toast";

export default function EditableImage({link, setLink}) {

    async function handleFileChange(ev){
        const files = ev.target.files;
        if( files?.length === 1 ){
            const data = new FormData;
            data.set('file', files[0]);

            const uploadPromise = fetch('/api/upload', {
                method: 'POST',
                body: data,
            }).then( response  => {
                if (response.ok){
                    return response.json().then(link => {
                        setLink(link);
                    })
                }
                throw new Error('Something went wrong!');
            });
            await toast.promise(uploadPromise, {
                loading: 'Uploading...',
                success: 'Upload completed!',
                error: 'Upload error'
            })
        }
    }


    return(
        <>
        {link && (
            <Image
                className="w-full h-full mb-1 rounded-lg"
                src={link} alt={"User Image"} width={250} height={250}/>
        )}
        {!link && (
            <div className="p-4 mb-1 text-center text-gray-500 bg-gray-200 rounded-lg">
                No image :(
            </div>
        )}
        <label >
            <input type="file" className="hidden"
            onChange={handleFileChange}
            />
            <span className="block p-2 text-center border border-gray-300 rounded-lg cursor-pointer">Edit</span>
        </label>
        </>
    )
};
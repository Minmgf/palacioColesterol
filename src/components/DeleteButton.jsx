import { useState } from "react";

export default function DeleteButton({label, onDelete}) {

    const [showConfirm, setShowConfirm] = useState(false);

    if (showConfirm) {
        return (
            <div className="fixed inset-0 flex items-center justify-center h-full bg-black/80">


            <div className="top-0 left-0 p-4 bg-white rounded-lg ">
                <div>Are you sure you want to delete?</div>
                <div className="flex gap-2">
                    <button type="button" onClick={() => setShowConfirm(false)}>
                        Cancel
                    </button>
                    <button type="button"
                            onClick={() => {
                                onDelete(); setShowConfirm(false);
                            }}
                            className="primary">
                        Yes,&nbsp;delete!
                    </button>
                </div>
            </div>
            </div>
        )
    }


    return(
        <button type="button" onClick={() => setShowConfirm(true) } >
            {label}
        </button>
    )
}
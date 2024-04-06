
import { useEffect, useState } from 'react';
import { UploadDropzone } from 'react-uploader';


type UploadDropZoneProps = {
    uploader: any,
    options: any,
    setLoading: any,
    ingestPdf: any
}
export default function UploadDropZone({
    uploader,
    options,
    setLoading,
    ingestPdf
}: UploadDropZoneProps) {
    const [flag, setFlag] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<any[]>([]);


    const handleClick = () => {
        console.log(selectedFiles)
        setLoading(true);
        for (var i = 0; i < selectedFiles.length; i++) {
            ingestPdf(
                selectedFiles[i].fileUrl,
                selectedFiles[i].originalFile.originalFileName || selectedFiles[i].filePath,
            );
        }
    }
    return (
        <div className="flex flex-col">
            <UploadDropzone
                uploader={uploader}
                options={options}
                onUpdate={(file: any[]) => {
                    setSelectedFiles(_file => _file.concat(file));
                }}
                width="470px"
                height="250px"
            />
            <button
                type="button"
                className="justify-center inline-flex items-center mt-4 px-4 py-2 font-semibold leading-6 text-lg shadow rounded-md text-black transition ease-in-out duration-150 cursor-pointer"
                onClick={() => handleClick()}
            >
                Start Prompoting
            </button>
        </div>
    )
}
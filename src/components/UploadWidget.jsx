import React, { useEffect, useRef } from "react";
import './UploadWidget.css'

function UploadWidget({ formData, setFormData, children, data, setData }) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dol6p0ex8',
            uploadPreset: 'vheyq52g',
            sources: [
                "local",
                "url"
            ],
            googleApiKey: "<image_search_google_api_key>",
            showAdvancedOptions: false,
            cropping: false,
            multiple: false,
            defaultSource: "local",
            styles: {
                palette: {
                    window: "#ffffff",
                    sourceBg: "#f4f4f5",
                    windowBorder: "#90a0b3",
                    tabIcon: "#000000",
                    inactiveTabIcon: "#555a5f",
                    menuIcons: "#555a5f",
                    link: "#0433ff",
                    action: "#339933",
                    inProgress: "#0433ff",
                    complete: "#339933",
                    error: "#cc0000",
                    textDark: "#000000",
                    textLight: "#fcfffd"
                }
            }
        }, function (error, result) {
            if (result.event === 'success') {
                if (data) {
                    setData({ ...data, picture: result.info.url });
                }
                else formData && setFormData({ ...formData, picture: result.info.url })
            }
        })
    }, [data])
    return (
        <>
            {children ?
                React.cloneElement(children, { onClick: () => widgetRef.current.open() })
                :

                <button id="widgetButton" type="button" onClick={() => {
                    widgetRef.current.open();
                }}>Upload</button>
            }
        </>
    )
}
export default UploadWidget;
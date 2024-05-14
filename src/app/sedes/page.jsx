'use client'
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { Fragment,useState } from 'react';
import Info from '@/components/layout/Info';

const markers = [
    {
        id: 1,
        name: "Palacio del colesterol - La Toma",
        position: { lat: 2.931612269794101, lng: -75.28517628030777 },
    },
    {
        id: 2,
        name: "Palacio del colesterol - La Gaitana",
        position: { lat: 2.9307778365338493, lng: -75.27266468062928 },
    },
    {
        id: 3,
        name: "Palacio del colesterol - Santa Ines",
        position: { lat: 2.946302011411035, lng: -75.29827297136035 },
    },
    {
        id: 4,
        name: "Palacio del colesterol - Timaco",
        position: { lat: 2.9091440670729014, lng: -75.27420621925413 },
    },
]

const Maps = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBgWCYJNwk2iPsMWSv3NxZmx7Yo1WxBf0c'
    })

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    }

    return (
        <Fragment>
            <Info />
            <div className='w-full h-auto'>

                {
                    isLoaded ? (
                        <GoogleMap
                            center={{ lat: 2.928112, lng: -75.255440 }}
                            zoom={14}
                            onClick={() => setActiveMarker(null)}
                            mapContainerClassName='w-full h-[55rem] min-h-screen relative cellphone:max-sm:h-[50rem]'
                        >

                            {
                                markers.map(({ id, name, position }) => (
                                    <MarkerF
                                        key={id}
                                        position={position}
                                        onClick={() => handleActiveMarker(id)}
                                        icon={{
                                            url: "https://cdn-icons-png.flaticon.com/512/4515/4515697.png",
                                            scaledSize: { width: 50, height: 50 }
                                        }}
                                    >
                                        {
                                            activeMarker === id ? <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                                <div>{name}</div>
                                            </InfoWindowF> : null
                                        }
                                        <div>{name}</div>
                                    </MarkerF>
                                ))
                            }
                            <div className='flex-col flex py-16 px-10 h-[calc(100%-50%)] cellphone:max-sm:px-5 cellphone:max-sm:justify-center text-white absolute w-[40%] cellphone:max-sm:w-[80%] sm:max-md:w-[60%] md:max-lg:w-[50%] cellphone:max-sm:right-1/5 cellphone:max-sm:left-1/5 cellphone:max-sm:inset-x-1/5 cellphone:max-sm:bottom-1/3 inset-y-[8rem] right-10' style={{ backgroundColor: 'rgba(27, 27, 27, 0.90)' }}>
                                <h1 className='w-full text-6xl text-right font-lilitaOne cellphone:max-sm:text-5xl'>Sedes - Palacio del Colesterol</h1>
                                <div className='flex flex-col justify-center h-full py-2'>
                                    <p className='w-full py-1 overflow-hidden text-2xl text-right text-clip cellphone:max-lg:text-1xl'>Neiva - Huila</p>
                                    <p className='w-full py-1 overflow-hidden text-2xl text-right text-clip cellphone:max-lg:text-1xl'>32224995432</p>
                                    <p className='w-full py-1 overflow-hidden text-2xl text-right text-clip cellphone:max-lg:text-1xl'>palacio.colesterol@email.com</p>
                                </div>
                            </div>
                        </GoogleMap>
                    ) : null
                }
            </div>
        </Fragment>
    )
}

export default Maps

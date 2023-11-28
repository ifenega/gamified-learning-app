import { IonModal } from '@ionic/react'
import React from 'react'

type Props = {
    text: string
    loading: boolean
}
const FullScreenLoader = (props: Props) => {

    return (
        <IonModal
            className="transparent-loader "
            isOpen={props.loading}

        >
            <div className='absolute h-[100vh] w-full bg-black bg-opacity-40 backdrop-blur-8 flex items-center justify-center gap-2 flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className='animate-spin w-12 h-12'>
                    <mask id="path-1-inside-1_74_24660" fill="white">
                        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM4.8 24C4.8 34.6039 13.3961 43.2 24 43.2C34.6039 43.2 43.2 34.6039 43.2 24C43.2 13.3961 34.6039 4.8 24 4.8C13.3961 4.8 4.8 13.3961 4.8 24Z" />
                    </mask>
                    <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM4.8 24C4.8 34.6039 13.3961 43.2 24 43.2C34.6039 43.2 43.2 34.6039 43.2 24C43.2 13.3961 34.6039 4.8 24 4.8C13.3961 4.8 4.8 13.3961 4.8 24Z" fill="white" stroke="white" stroke-width="2" mask="url(#path-1-inside-1_74_24660)" />
                    <mask id="path-2-inside-2_74_24660" fill="white">
                        <path d="M45.6 24C46.9255 24 48.0124 25.0773 47.8801 26.3961C47.4096 31.0865 45.5652 35.5542 42.5522 39.2254C39.0298 43.5176 34.128 46.4556 28.6822 47.5388C23.2363 48.6221 17.5834 47.7836 12.6865 45.1661C7.78959 42.5487 3.95175 38.3143 1.82689 33.1844C-0.297968 28.0545 -0.578382 22.3466 1.03343 17.0332C2.64524 11.7197 6.04956 7.12955 10.6663 4.04473C15.2831 0.959912 20.8266 -0.428676 26.3524 0.115566C31.0788 0.581078 35.5421 2.43602 39.1915 5.41988C40.2176 6.25889 40.2108 7.78923 39.2735 8.72649C38.3362 9.66375 36.8246 9.64985 35.7778 8.83675C32.9301 6.62481 29.5025 5.24905 25.8819 4.89245C21.4613 4.45706 17.0265 5.56793 13.333 8.03578C9.63964 10.5036 6.91619 14.1758 5.62674 18.4265C4.33729 22.6773 4.56162 27.2436 6.26151 31.3475C7.9614 35.4514 11.0317 38.8389 14.9492 40.9329C18.8667 43.0268 23.3891 43.6977 27.7457 42.8311C32.1024 41.9645 36.0238 39.6141 38.8418 36.1804C41.1498 33.368 42.6007 29.9716 43.0502 26.3938C43.2155 25.0787 44.2745 24 45.6 24Z" />
                    </mask>
                    <path d="M45.6 24C46.9255 24 48.0124 25.0773 47.8801 26.3961C47.4096 31.0865 45.5652 35.5542 42.5522 39.2254C39.0298 43.5176 34.128 46.4556 28.6822 47.5388C23.2363 48.6221 17.5834 47.7836 12.6865 45.1661C7.78959 42.5487 3.95175 38.3143 1.82689 33.1844C-0.297968 28.0545 -0.578382 22.3466 1.03343 17.0332C2.64524 11.7197 6.04956 7.12955 10.6663 4.04473C15.2831 0.959912 20.8266 -0.428676 26.3524 0.115566C31.0788 0.581078 35.5421 2.43602 39.1915 5.41988C40.2176 6.25889 40.2108 7.78923 39.2735 8.72649C38.3362 9.66375 36.8246 9.64985 35.7778 8.83675C32.9301 6.62481 29.5025 5.24905 25.8819 4.89245C21.4613 4.45706 17.0265 5.56793 13.333 8.03578C9.63964 10.5036 6.91619 14.1758 5.62674 18.4265C4.33729 22.6773 4.56162 27.2436 6.26151 31.3475C7.9614 35.4514 11.0317 38.8389 14.9492 40.9329C18.8667 43.0268 23.3891 43.6977 27.7457 42.8311C32.1024 41.9645 36.0238 39.6141 38.8418 36.1804C41.1498 33.368 42.6007 29.9716 43.0502 26.3938C43.2155 25.0787 44.2745 24 45.6 24Z" fill="#0BA5EC" stroke="#0BA5EC" stroke-width="2" mask="url(#path-2-inside-2_74_24660)" />
                </svg>

                <p className='text-gray/800 font-semibold tracking-[-0.24px]'>{props.text}</p>
            </div>
        </IonModal>
    )
}

export default FullScreenLoader
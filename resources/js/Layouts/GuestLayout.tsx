import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import '@/Styles/guest.css'

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <div className="guestcontainer">
                <div className="guestmain">
                    <div className="guestmenu"></div>
                    <div className="guestundermenufirst"></div>
                    <div className="guestundermenusecond"></div>

                </div>

                <div className='guestchildren'>
                    {children}
                </div>
            </div>
        </>
    );
}

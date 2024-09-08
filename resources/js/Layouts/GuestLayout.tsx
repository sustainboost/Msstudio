import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import Logo from '@/images/LOGO.png'
import '@/Styles/guest.css'

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <div className="guestcontainer">
                <div className="guestmain">
                    <div className="guestmenu">
                        <div className='guestmenuimage'>
                            <img src={Logo} alt="Ms' Studio"
                            onClick={() => window.open('/' ,"_self")}
                            />
                        </div>
                        {/* <div className="guestmenuimage">H</div>
                        <div className="guestmenuimage">M</div>
                        <div className="guestmenuimage">L</div> */}

                    </div>
                    <div className="guestundermenufirst">... COMMING SOON ...</div>
                    <div className="guestundermenusecond"
                        onClick={() => window.open('/webmail' ,"_self")}
                    >
                        Espace email
                    </div>
                    <div className="guestundermenusecond"
                        onClick={() => window.open('/login' ,"_self")}
                    >
                        Se connecter
                    </div>

                </div>

                <div className='guestchildren'>
                    {children}
                </div>
            </div>
        </>
    );
}

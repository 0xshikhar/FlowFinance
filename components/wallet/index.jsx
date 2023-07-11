"use client"; // this is a client-side only component
import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import * as fcl from "@onflow/fcl";
import { config } from "@onflow/fcl";
import { useRouter } from "next/navigation";
import { RouteHandlerManager } from "next/dist/server/future/route-handler-managers/route-handler-manager";

export default function Wallet() {
    const [isOpen, setIsOpen] = useState(false); // for popup
    const [walletState, setWalletState] = useState(false)
    const [user, setUser] = useState({ addr: '' });
    const [services, setServices] = useState([])

    useEffect(() => fcl.discovery.authn.subscribe(res => setServices(res.results)), [])


    // if (typeof window !== 'undefined') {
    //     console.log('You are on the browser')
    //     // 👉️ can use localStorage here

    //     localStorage.setItem('name', 'Tom');

    //     console.log(localStorage.getItem('name')); // 👉️ "Tom"
    // } else {
    //     console.log('You are on the server')
    //     // 👉️ can't use localStorage
    // }



    // functions for popup

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const router = useRouter();


    //function for login
    const Login = async () => {
        await fcl.authenticate().then(() => {
            fcl.currentUser.subscribe((currentUser) => {
                // setUser(currentUser.address.toString())
            })
            // router.push("/signin")
        });
        setWalletState(true)
    };

    // const user = localStorage.getItem("User")

    // useEffect(() => {
    //     fcl.currentUser.subscribe(setUser)
    //     console.log("address", user)
    // })


    //function for logout
    const Logout = () => {
        fcl.unauthenticate()
        window.location.reload()
    };

    return (
        <div>
            {/* conditional renedering  */}

            {!walletState ?
                (<div className="flex flex-wrap justify-center ">
                    <button
                        onClick={Login}
                        type="button"
                        className="block w-full rounded bg-[#00EE8A] px-4 py-3 text-md font-medium text-black    hover:scale-110 duration-300  sm:w-auto"
                    >
                        Connect with Flow
                    </button>
                </div>
                ) :
                (
                    <div className=" flex flex-wrap justify-center">
                        <button
                            onClick={Logout}
                            type="button"
                            className="block w-full rounded bg-[#00EE8A] px-4 py-3 text-md font-medium text-black    hover:scale-110 duration-300  sm:w-auto"
                        >
                            Disconnect
                        </button>
                    </div>
                )
            }


            {/* Popup code */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Wallet coming soon
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This feature is coming soon. We are working on it. Stay
                                            tuned!
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

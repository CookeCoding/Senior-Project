import Navbar from './NavBar';
import React from 'react';
const Help = () => {
    return (
        <div>
            <Navbar /> {/* Moved navbar to the top */}
            <div className="container my-24 mx-auto md:px-6">
                {/* Section: Design Block */}
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-7/12 md:px-3 lg:px-6">
                            <h2 className="mb-8 text-3xl font-bold">Frequently asked questions</h2>
                            <p className="mb-2 font-bold text-xl">Why do we have a waitlist feature in the app?</p>
                            <p className="mb-8 text-neutral-500 dark:text-blue-500">
                            The waitlist feature allows users to join a waitlist for out-of-stock furniture items that they are interested in purchasing. 
                            This helps us prioritize restocking efforts and notifies users when the item becomes available again.
                            </p>
                            <p className="mb-2 font-bold text-xl">How can I join the waitlist for a furniture item that is currently out of stock?</p>
                            <p className="mb-8 text-blue-500 dark:text-blue-500 text-l" >
                            To join the waitlist for an out-of-stock furniture item, simply navigate to the product page of the desired item and 
                            click on the "Join Waitlist" button. You will be prompted to enter your email address, and you will 
                            receive a notification when the item is back in stock.
                            </p>
                            <p className="mb-2 font-bold text-xl">
                            What should I do if I forget my password for the site?
                            </p>
                            <p className="mb-8 text-neutral-500 dark:text-blue-500 text-l">
                                You should email c.l.cooke@email.msmary.edu to rest your password
                            </p>

                            <p className="mb-2 font-bold text-xl">
                            How do we track furniture items in the app?
                            </p>
                            <p className="text-blue-500 dark:text-blue-500 text-l">
                            We track furniture items in the app using a unique ID number assigned to each item. 
                            Additionally, we associate each item with the email address of the user who purchased it or joined the waitlist for it. 
                            This allows us to efficiently manage inventory, process orders, and notify users about stock availability.
                            </p>
                            
                            <p className="mb-2 font-bold text-xl">
                            Didn't find your answer in the FAQ? Contact our sales
                            </p>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto md:w-5/12 md:px-3 lg:px-6">
                            <p className="mb-8 font-bold">
                                Didn't find your answer in the FAQ? Contact our sales
                            </p>
                            <form>
                                {/* Form content */}
                            </form>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
        </div>
    );
}

export default Help;

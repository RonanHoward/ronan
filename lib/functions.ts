import { addDoc, collection } from "firebase/firestore"
import { Dispatch, SetStateAction } from "react"
import toast from "react-hot-toast"
import { db } from "./firebaseConfig"

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * If argument exists return that argument. Otherwise, return `''`
 * @param str 
 * @returns 
 */
export const str = (str: string | undefined | null) => { return str?str:'' }

/**
 * Returns whether or not to switch to mobile format based off of the page width
 * @param pageWidth 
 * @returns boolean whether user is in mobile dimensions or not
 */
export const isMobile = (pageWidth:number) => { return pageWidth <= 768 }

/**
 * Sends a contact message to the firestore database
 * @param name 
 * @param email 
 * @param message 
 */
export const sendContactMessage = (name: string, email: string, message: string, uid: string = '', dispatches: Array<Dispatch<SetStateAction<string>>>) => {
    
    console.log({name, email, message, uid})

    if ( emailRegex.test(email) ) {
        if (name && message) {
            toast.promise(
                addDoc(
                    collection(db, 'contactMessages'),
                    {
                        uid: uid,
                        name: name,
                        email: email,
                        message: message
                    }
                ),
                {
                    loading: 'Sending message...',
                    success: 'Message Sent!',
                    error: 'An error occured while trying to send your message'
                }
            ).then(() => {
                // clear all states if successful
                dispatches[0]('')
                dispatches[1]('')
                dispatches[2]('')
            })
        } else {
            toast.error('Please enter a name and a message')
        }
    } else {
        toast.error('The email you entered is invalid')
    }
}

import React from 'react';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';

const backdropVariants = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}

const modalVariants = {
    hidden: {
        opacity: 0,
        y: '-100vw',
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 20
        }
    },
    visible: {
        y: 200,
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.5,
        }
    }
}

const Modal = ({ showModal, setShowModal }) => {
    return(
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div 
                className='backdrop'
                variants={backdropVariants}
                animate="visible"
                initial="hidden"
                exit="hidden"
                >
                    <motion.div 
                        className='modal'
                        variants={modalVariants}
                    >
                        <h1>Thank you for your order!</h1>
                        <p>Your pizza will be delivered in 30 minutes</p>
                        <p>Want to make another pizza?</p>
                        <Link to='/'>
                            <button onClick={() => setShowModal(false)}>
                                Continue Shopping
                            </button>
                        </Link>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}
export default Modal;
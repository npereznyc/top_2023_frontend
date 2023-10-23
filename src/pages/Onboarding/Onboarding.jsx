import React from 'react';
import { useState } from 'react';
import { Modal } from 'flowbite-react';
import './Onboarding.css';

export default function Onboarding({goToQuiz}) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <div className="flex flex-col pt-10 pb-20 gap-10 items-center h-full w-full">
            <div className='p1'>Along your hike, discover more with 'learn more' links.</div>
            <div className='p2'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18" 
                    viewBox="0 0 18 18" 
                    fill="none" 
                >
                    <path
                        d="M8.25 5.25H9.75V6.75H8.25V5.25ZM8.25 8.25H9.75V12.75H8.25V8.25ZM9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z"
                        fill="#6846BC"
                    />
                </svg>
                <a href='#' onClick={openModal}>Tap me to learn more</a>
            </div>
            <div className='p3'>Visit the Glossary for quick term definitions</div>
            <div className='p4'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 18 18" 
                    fill="none"
                >
                    <path
                        d="M8.25 5.25H9.75V6.75H8.25V5.25ZM8.25 8.25H9.75V12.75H8.25V8.25ZM9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z"
                        fill="#6846BC"
                    />
                </svg>
                <span>Tap to visit glossary</span>
            </div>

            <Modal
                show={isModalOpen}
                onClose={closeModal}
            >
                <div className='custom-modal'>
                    <Modal.Header className='modal-header'>
                        <img src="/question-mark.png" alt="question-mark logo" />
                        <span>Learn More</span>
                    </Modal.Header>
                    <Modal.Body className='modal-body'>These links will help deepen your learning along the way.</Modal.Body>
                </div>
            </Modal>
            <button onClick={goToQuiz} className="bg-green text-white py-2 px-4 rounded; button" ><span>Let's do this</span></button>
        </div>
    )
}
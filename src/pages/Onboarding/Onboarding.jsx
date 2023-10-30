import React, {useState} from 'react';
// import CustomModal from '../../components/CustomModal/CustomModal';
import { Modal } from 'flowbite-react';
import './Onboarding.css';

export default function Onboarding({goToQuiz}) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    const openSecondModal = () => {
        setIsSecondModalOpen(true);
    };

    const closeSecondModal = () => {
        setIsSecondModalOpen(false);
    };

    return (
        <div className="flex flex-col pt-10 pb-20 gap-10 items-center h-full w-full">
            <div className='p1'>Along your hike, discover more with 'learn more' links.</div>
            <div className='p2'>
                <img src="/info-icon.svg" alt="info-icon" />
                <a href='#' onClick={openModal}>Tap me to learn more</a>
            </div>
            <div className='p3'>Visit the Glossary for quick term definitions</div>
            <div className='p4'>
                <img src="/info-icon.svg" alt="info-icon" />
                <a href='#' onClick={openSecondModal}>Tap to visit glossary</a>
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
                    <Modal.Body className='modal-body mx-10 my-5'>
                        These links will help deepen your learning along the way.
                    </Modal.Body>
                </div>
            </Modal>

            <Modal
                show={isSecondModalOpen}
                onClose={closeSecondModal}
                onClick={closeSecondModal}
                className='modal-2-background'
            >
            </Modal>

            <button onClick={goToQuiz} className="bg-green text-white py-2 px-4 rounded; button" ><span>Let's do this</span></button>
        </div>
    )
}
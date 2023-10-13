import { Modal } from "flowbite";
import { useState } from "react";

const Dialog = ({ header, content }) => {
    const [openModal, setOpenModal] = useState()
    const props = { openModal, setOpenModal }

    return (
        <>
            <Modal
                show={props.openModal === "default"}
                onClose={() => props.setOpenModal(undefined)}
            >
                <Modal.Header>{header}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {content}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default Dialog
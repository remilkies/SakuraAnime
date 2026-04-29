import React, { use, useEffect, useState} from "react";
import { Modal, Button } from "react-bootstrap";
import flower from "../assets/SakuraAnime/flowerFeature.png";
import sakuraSpin from "../assets/SakuraAnime/sakuraSpin.svg";

export default function WorkInProgress() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const hasSeenNotice = sessionStorage.getItem("sakuraNoticeSeen");

        if (!hasSeenNotice) {
        setShow(true);
        }
    }, []);

const handleClose = () => {    
    setShow(false);
    sessionStorage.setItem("sakuraNoticeSeen", "true");
};

return (
    <Modal show={show} onHide={handleClose} centered backdrop={true} dialogClassName="sakura-modal">
        <img src={flower} alt="Sakura Flower" className="modal-flower" />
        <Modal.Body className="p-5">
            
            
            <div className="d-flex justify-content-center mb-4">
                <h2 className="titleBadge m-0">Work in Progress</h2>
            </div>

            <ul className="construction-list">
                <li>
                    <img src={sakuraSpin} alt="*" className="construction-bullet" />
                    
                    <span>We are aware of some minor bugs with the selection process as well as some desgining flaws. We are working hard to fix this issue and ensure a smoother user experience.</span>
                </li>
                <li>
                    <img src={sakuraSpin} alt="*" className="construction-bullet" />
                    <span>In the meantime, please note that <strong>refreshing the page</strong> clears your anime selection and is currently the only way to clear selections.</span>
                </li>
                <li>
                    <img src={sakuraSpin} alt="*" className="construction-bullet" />
                    <span>Furthermore, please navigate back to this page to select new anime to compare.</span>
                </li>
                <li>
                    <img src={sakuraSpin} alt="*" className="construction-bullet" />
                    <span>We are working hard to implement a more seamless selection process, such as adding a clear selection button and allowing users to select new anime without having to navigate back to the home page.</span>
                </li>
                <li>
                    <img src={sakuraSpin} alt="*" className="construction-bullet" />
                    <span>Otherwise, all other expected features of this application are functioning as normal. We at REMByte apologize for any inconvenience this may cause and appreciate your understanding and patience as we work to improve the application &lt;33</span>
                </li>
            </ul>

            <div className="mt-4 d-flex flex-column align-items-center">
                <Button className="agree-btn" onClick={handleClose}>I Understand, but I'll be back</Button>
                <small className="mt-2 text-muted" style={{ fontSize: '14px', textAlign: 'center' }}>
                    There'll be some extra cutesy new features and designs waiting for you, so do stay tuned!
                </small>
            </div>
        </Modal.Body>
    </Modal>
);
}
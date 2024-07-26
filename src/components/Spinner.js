import React, {useEffect, useRef, useState} from "react";
import {PuffLoader} from "react-spinners";
import {useWebSocket1} from "../context/WebSocketProviders";

const Spinner = ({keyword}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const {messages} = useWebSocket1();
    const timerRef = useRef(null);

    useEffect(() => {
        let newMessagesReceived = false;

        messages.forEach((msg) => {
            if (msg.key === keyword) {
                newMessagesReceived = true;
                setData((prevData) => [...prevData, msg.value]);
                // Set loading to true when a new message is received
                setLoading(true);

                // Clear any existing timer
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                }

                // Set a new timer to turn off loading after 5 seconds
                timerRef.current = setTimeout(() => setLoading(false), 5000);
            }
        });

        // If no new messages are received, ensure the loading state is reset after 5 seconds
        if (!newMessagesReceived) {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => setLoading(false), 5000);
        }

        // Cleanup function to clear the timer when the component unmounts or messages/keyword changes
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [messages, keyword]);

    return (
        <div>
            {loading && <PuffLoader size={20} color="grey" />}
        </div>
    );
};

export default Spinner;
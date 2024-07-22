import React, {createContext, useState, useEffect, useCallback, useContext,} from "react";

const WebSocketPlotContext = createContext(null);

export const WebSocketPlotProvider = ({url, children}) => {
    const [ws, setWs] = useState(null);

    const closeConnection = useCallback(() => {
        if (ws) {
            ws.close();
        }
    }, [ws]);

    useEffect(() => {

        const wsClient = new WebSocket(url);

        wsClient.onopen = () => {
            // wsClient.send("-c&-jsonfragments&-prefix&-s&sca%");
            // wsClient.send("-c&-jsonfragments&-prefix&-s&pie&!&slow&!&%timeout");
            // ---- adjust serviceName ----
            wsClient.send(`-s&scagilent&K_BENCH_LR&K_COLDHEAD&-date&"2024-07-16T00:00"&-date&"1 hour ago"&-interval-1h-json`);
            console.log('Connection to WebSocket Plot server');

        };
        wsClient.onmessage = (message) => {
            console.log("------------- WebSocketPlot");
            console.log(message);
            console.log('-------------- END')
        }
        setWs(wsClient);

        wsClient.onclose = () => {
            console.log('Disconnected from the WebSocket Plot server');
        };

        wsClient.onerror = (e) => {
            console.error(`WebSocket error: ${e.msg}`);
        };

        return () => {
            wsClient.close();
        }
    }, [url])

}
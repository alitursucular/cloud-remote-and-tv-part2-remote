import axios from "axios";
import { useQuery, useMutation } from "react-query";
import queryClient from "../queryClient";

const getCurrentChannel = async () => {
    const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_FIREBASE_MICROSERVICE_URL}/currentChannel`
    });

    return response.data;
};

const setPreviousChannel = async () => {
    const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_FIREBASE_MICROSERVICE_URL}/previousChannel`
    });

    return response.data;
};

const setnextChannel = async () => {
    const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_FIREBASE_MICROSERVICE_URL}/nextChannel`
    });

    return response.data;
};

const useCurrentChannel = () => {
    return useQuery("currentChannel", getCurrentChannel);
};

const usePreviousChannel = () => {
    return useMutation(setPreviousChannel, {
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["currentChannel"],
                exact: true
            });
        }
    });
};

const useNextChannel = () => {
    return useMutation(setnextChannel, {
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["currentChannel"],
                exact: true
            });
        }
    });
};

export { useCurrentChannel, usePreviousChannel, useNextChannel };

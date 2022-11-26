import { QueryClient } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60000,
            refetchInterval: false,
            cacheTime: Infinity
        }
    }
});

const localStoragePersistor = createWebStoragePersistor({
    storage: window.localStorage,
    key: "CLOUD_REMOTE_CONTROLLER"
});

persistQueryClient({
    queryClient,
    persistor: localStoragePersistor
});

export default queryClient;

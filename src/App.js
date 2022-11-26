import RemoteController from "./components/remote-controller";

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                    <RemoteController />
                </div>
            </div>
        </div>
    );
};

export default App;

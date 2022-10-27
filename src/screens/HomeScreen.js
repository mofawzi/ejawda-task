import Establishment from './../components/Establishment/Establishment';

const HomeScreen = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-0">
                    {/* Sidebar */}
                </div>
                <div className="col-9 px-10">
                    <main className="mt-40">
                        <Establishment />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;

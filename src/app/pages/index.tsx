// src/pages/index.tsx
import Navigation from "../components/navbar";

const Graphs: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen h-screen overflow-hidden">
            <Navigation />
            <div className="flex-grow overflow-hidden">
                <iframe
                    src="http://localhost:3838"
                    className="w-full h-full"
                    style={{ border: 'none' }}
                    title="R Shiny Application"
                />
            </div>
        </div>
    );
};

export default Graphs;

import Layout from "@/app/components/layout";
import {NextUIProvider} from "@nextui-org/react";

const Home = () => {
    return (
        <Layout>
            <iframe
                src="http://localhost:3838"
                width="100%"
                height="100%"
                style={{ border: "none", height: "calc(100vh - 64px)" }}
                title="Docker Container"
            ></iframe>
        </Layout>
    );
};

export default Home;

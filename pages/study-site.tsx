// src/pages/data.tsx
import Layout from "@/app/components/layout"

const StudySite: React.FC = () => {
    return (
        <Layout>
            <h1>Study Site Information!!</h1>
            <div style={{overflow: 'hidden', padding: '0', position: 'relative', height: '500px', width: '100%'}}>
                <iframe
                    width="100%"
                    height="100%"
                    style={{border: 'none'}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11711.972666306252!2d-73.45261783234683!3d42.78849433369984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0a76ab7b4e24b%3A0x6de315405cd62765!2sLong%20Pond!5e0!3m2!1sen!2sus!4v1731338227392!5m2!1sen!2sus"                ></iframe>
            </div>
        </Layout>
    );
};

export default StudySite;

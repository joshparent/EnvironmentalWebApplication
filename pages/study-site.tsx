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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.6371340898118!2d-73.4576941!3d42.7748789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0a777f6dd308d%3A0x998a6524634535dd!2sGrafton%20Lakes%20State%20Park!5e0!3m2!1sen!2sus!4v1731304007791!5m2!1sen!2sus"
                ></iframe>
                </div>
        </Layout>
);
};

export default StudySite;

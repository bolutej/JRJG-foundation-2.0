import {useState} from 'react'
import Characters from './Characters';
import "../App.css"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [toast, setToast] = useState({ message: "", type: "success", show: false });

    const showToast = (message, type = "success") => {
        setToast({ message, type, show: true});
        setTimeout(() => { 
            setToast((prev) => ({...prev, show: false}))
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sendMessage = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://byqopxrcjrqdofhlwkma.supabase.co/functions/v1/send-contact-email", 
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
            }
        );

        const data = await res.json();

        if (data.success) {
            showToast("✅ Message sent successfully!", "success");
            setFormData({ name: '', email: '', message: '' });
        } else {
            showToast("❌ Failed to send message. Please try again.", "error");
        }
    } catch (err) {
        showToast("❌ An error occurred. Please try again.", "error");
    }
    };

    return (
            <section id="donate">
            <div>
            <h1>Partner with Us<br/> in this work</h1>
            <p>If God is speaking to you about this foundation,<br/>we'd love to hear from you - whether to give, to<br/>or to collaborate.</p>
            </div>
            <form onSubmit={sendMessage} id="form" className="inputPr">
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                />
                <input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                />
                <div>
                    
                    <Characters 
                    value={formData.message}
                    onChange={(val) => setFormData(prev => ({ ...prev, message: val }))}
                    />
                </div>
            </form>

            <div 
                id="toast" 
                className={`toast ${toast.type} ${toast.show ? "show" : ""}`}
            >
                {toast.message}
            </div>
            </section>
    )
} 
import React, { useEffect } from "react";
import "./Contant.css";
import { Form, Input, Button, notification } from "antd";

const Contant = () => {
    const [form] = Form.useForm();
    useEffect(() => {
        window.scrollTo(0, 0);  // This ensures the page opens from the top
    }, []);

    const handleSubmit = async (values) => {
        try {
            const response = await fetch("http://localhost:4040/api/autosend/sendEmailForsachin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                notification.success({ message: "Message sent successfully!" });
                form.resetFields();
            } else {
                notification.error({ message: "Failed to send message" });
            }
        } catch (error) {
            notification.error({ message: "An error occurred. Try again later." });
        }
    };

    return (
        <>
            <section className="contact-container">
                <h2>Contact Us</h2>
                <Form form={form} onFinish={handleSubmit} className="contact-form">
                    <Form.Item name="name" rules={[{ required: true, message: "Please enter your name" }]}>
                        <Input placeholder="Your Name*" />
                    </Form.Item>
                    <Form.Item name="surname" rules={[{ required: true, message: "Please enter your surname" }]}>
                        <Input placeholder="Your Surname*" />
                    </Form.Item>
                    <Form.Item name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
                        <Input placeholder="Your Email*" />
                    </Form.Item>
                    <Form.Item name="message" rules={[{ required: true, message: "Please enter your message" }]}>
                        <Input.TextArea placeholder="Your Message*" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit"><span>Send Message</span></Button>
                </Form>
            </section>
        </>
    );
};

export default Contant;

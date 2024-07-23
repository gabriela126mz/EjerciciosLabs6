import React, { useState } from "react";

const UncontrolledForm = () => {
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.elements.name.value.trim();
        const email = e.target.elements.email.value.trim();
        const password = e.target.elements.password.value.trim();
        const confirmPassword = e.target.elements.confirmPassword.value.trim();
        const gender = e.target.elements.gender.value;
        const termsAccepted = e.target.elements.terms.checked;

        const newErrors = {};

        if (password && confirmPassword && password !== confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden";
        }
        if (!name) {
            newErrors.name = "El nombre es obligatorio";
        }
        if (!email) {
            newErrors.email = "El email es obligatorio";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            console.log("Errores:", newErrors);
            return;
        }

        console.log("Formulario enviado:", {
            name,
            email,
            password,
            gender,
            termsAccepted,
        });
    };

    const formStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '10px',
        fontSize: '16px'
    };

    const inputStyle = {
        display: 'block',
        width: '100%',
        padding: '8px',
        margin: '5px 0 10px 0',
        border: '1px solid #ddd',
        borderRadius: '4px'
    };

    const buttonStyle = {
        backgroundColor: '#646cff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
    };

    const errorStyle = {
        color: 'red',
        fontSize: '14px',
        display: 'block',
        marginTop: '5px'
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h1 style={{ color: "#646cff" }}>Formulario no controlado</h1>
            <label style={labelStyle}>
                Nombre:
                <input type="text" name="name" style={inputStyle} />
                {errors.name && <span style={errorStyle}>{errors.name}</span>}
            </label>
            <label style={labelStyle}>
                Email:
                <input type="email" name="email" style={inputStyle} />
                {errors.email && <span style={errorStyle}>{errors.email}</span>}
            </label>
            <label style={labelStyle}>
                Contraseña:
                <input type="password" name="password" style={inputStyle} />
                {errors.password && <span style={errorStyle}>{errors.password}</span>}
            </label>
            <label style={labelStyle}>
                Repetir Contraseña:
                <input type="password" name="confirmPassword" style={inputStyle} />
                {errors.confirmPassword && <span style={errorStyle}>{errors.confirmPassword}</span>}
            </label>
            <label style={labelStyle}>
                Género:
                <select name="gender" style={inputStyle}>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </label>
            <label style={labelStyle}>
                <input type="checkbox" name="terms" />
                Acepto los términos y condiciones
            </label>
            <button type="submit" style={buttonStyle}>Enviar</button>
        </form>
    );
};

export default UncontrolledForm;

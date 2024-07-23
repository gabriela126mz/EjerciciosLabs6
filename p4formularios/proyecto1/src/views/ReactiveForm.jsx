import React, { useState } from "react";

const ReactiveForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "masculino",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));

        const newErrors = validateField(name, value);
        setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    };

    const validateField = (fieldName, value) => {
        const errors = {};

        if (fieldName === "name") {
            if (value.length < 3) {
                errors[fieldName] = "El nombre debe tener al menos 3 caracteres.";
            }
        }

        if (fieldName === "password" || fieldName === "confirmPassword") {
            if (value.length < 6) {
                errors[fieldName] = "La contraseña debe tener al menos 6 caracteres.";
            }

            if (fieldName === "confirmPassword" && value !== formData.password) {
                errors.confirmPassword = "Las contraseñas no coinciden.";
            }
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const { name, email, password, confirmPassword, gender, termsAccepted } = formData;
        const newErrors = {};

        if (!name.trim()) newErrors.name = "Por favor, ingrese su nombre.";
        if (!email.trim()) newErrors.email = "Por favor, ingrese su email.";
        if (!password.trim()) newErrors.password = "Por favor, ingrese su contraseña.";
        if (password !== confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden.";
        if (!gender) newErrors.gender = "Por favor, seleccione su género.";
        if (!termsAccepted) newErrors.termsAccepted = "Debe aceptar los términos y condiciones.";

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            console.log("Errores:", newErrors);
            return;
        }
        console.log("Formulario enviado:", formData);
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
            <h1 style={{ color: "#646cff" }}>Formulario Reactivo</h1>
            <label style={labelStyle}>
                Nombre:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                {errors.name && <span style={errorStyle}>{errors.name}</span>}
            </label>
            <label style={labelStyle}>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                {errors.email && <span style={errorStyle}>{errors.email}</span>}
            </label>
            <label style={labelStyle}>
                Contraseña:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                {errors.password && <span style={errorStyle}>{errors.password}</span>}
            </label>
            <label style={labelStyle}>
                Repetir Contraseña:
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                {errors.confirmPassword && <span style={errorStyle}>{errors.confirmPassword}</span>}
            </label>
            <label style={labelStyle}>
                Género:
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    style={inputStyle}
                >
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </label>
            <label style={labelStyle}>
                <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                />
                Acepto los términos y condiciones
                {errors.termsAccepted && <span style={errorStyle}>{errors.termsAccepted}</span>}
            </label>
            <button type="submit" style={buttonStyle}>Enviar</button>
        </form>
    );
};

export default ReactiveForm;

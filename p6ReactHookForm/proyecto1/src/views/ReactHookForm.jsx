import React from "react";
import { useForm } from "react-hook-form";

const validateName = {
    required: "Por favor, ingrese su nombre",
    minLength: { value: 3, message: "El nombre es demasiado corto" },
    maxLength: { value: 40, message: "El nombre es demasiado largo" }
};

const validateEmail = {
    required: "Por favor, ingrese su email",
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "El email no es válido.",
    }
};

const ReactHookForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        const watchedValues = watch(["name", "email"]);
        console.log("watch con parámetros", watchedValues);
        console.log("watch all", watch());
        console.log("data", data);
    };

    const handleBlurValidation = (fieldName) => {
        trigger(fieldName);
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
        <div>
            <h1 style={{ color: "#646cff", textAlign: "center" }}>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
                <label style={labelStyle}>
                    Nombre:
                    <input
                        type="text"
                        {...register("name", validateName)}
                        onBlur={() => handleBlurValidation("name")}
                        style={inputStyle}
                    />
                    {errors.name && <span style={errorStyle}>{errors.name.message}</span>}
                </label>
                <label style={labelStyle}>
                    Email:
                    <input
                        type="email"
                        {...register("email", validateEmail)}
                        onBlur={() => handleBlurValidation("email")}
                        style={inputStyle}
                    />
                    {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
                </label>
                <button type="submit" style={buttonStyle}>Enviar</button>
            </form>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <h2>Valores:</h2>
                <pre>{JSON.stringify(watch(), null, 2)}</pre>
            </div>
        </div>
    );
};

export default ReactHookForm;

import React, { useState } from "react";

const DynamicForm = () => {
    const [formData, setFormData] = useState({
        selectedAutonomousCommunity: "",
        selectedCity: ""
    });

    const comunidadesAutonomas = [
        "Andalucía",
        "Aragón",
        "Asturias",
        "Canarias",
        "Cantabria",
        "Castilla y León",
        "Castilla-La Mancha",
        "Cataluña",
        "Extremadura",
        "Galicia",
        "Islas Baleares",
        "La Rioja",
        "Madrid",
        "Murcia",
        "Navarra",
        "País Vasco",
        "Valencia"
    ];

    const citiesByCommunity = {
        Andalucía: ["Sevilla", "Málaga", "Cádiz"],
        Aragón: ["Zaragoza", "Huesca", "Teruel"],
        Asturias: ["Oviedo", "Gijón", "Avilés"],
        Galicia: ["Portonovo", "Vigo", "A Coruña"]
    };

    const handleAutonomousCommunityChange = (e) => {
        const selectedAutonomousCommunity = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            selectedAutonomousCommunity,
            selectedCity: "",
        }));
    };
    
    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            selectedCity,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `${formData.selectedAutonomousCommunity} mola, ${formData.selectedCity} es genial!`
        );
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

    const selectStyle = {
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

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>
                Comunidad Autónoma:
                <select
                    name="selectedAutonomousCommunity"
                    value={formData.selectedAutonomousCommunity}
                    onChange={handleAutonomousCommunityChange}
                    style={selectStyle}
                >
                    <option value="">Seleccione...</option>
                    {comunidadesAutonomas.map((community) => (
                        <option key={community} value={community}>
                            {community}
                        </option>
                    ))}
                </select>
            </label>
            {formData.selectedAutonomousCommunity && (
                <label style={labelStyle}>
                    Ciudad:
                    <select
                        name="selectedCity"
                        value={formData.selectedCity}
                        onChange={handleCityChange}
                        style={selectStyle}
                    >
                        <option value="">Seleccione...</option>
                        {citiesByCommunity[formData.selectedAutonomousCommunity]?.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </label>
            )}
            <button type="submit" style={buttonStyle}>Enviar</button>
        </form>
    );
};

export default DynamicForm;

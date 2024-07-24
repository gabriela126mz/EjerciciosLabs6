import React from "react";
import { useForm } from "react-hook-form";

const comunidadesAutonomas = ["Galicia", "Asturias"];
const citiesByCommunity = {
  Galicia: ["Vigo", "Santiago de Compostela", "A Coruña"],
  Asturias: ["Oviedo", "Gijón", "Avilés"],
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handlePasswordValidation = () => {
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    clearErrors(["password", "confirmPassword"]);

    if (password.length < 6) {
      setError("password", {
        type: "manual",
        message: "La contraseña debe tener al menos 6 caracteres.",
      });
    }

    if (password !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Las contraseñas no coinciden.",
      });
    }
  };

  const handleEmailValidation = () => {
    const email = watch("email");
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    clearErrors("email");

    if (!email.match(emailRegex)) {
      setError("email", {
        type: "manual",
        message: "Ingrese una dirección de correo electrónico válida.",
      });
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ color: "#646cff" }}>React Hook Form</h1>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>
          Nombre:
          <input
            type="text"
            {...register("name", {
              required: "Por favor, ingrese su nombre.",
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres.",
              },
              maxLength: {
                value: 40,
                message: "El nombre no puede tener más de 40 caracteres.",
              },
            })}
            style={{ display: "block", width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            {...register("email", {
              required: "Por favor, ingrese su email.",
              onBlur: handleEmailValidation,
            })}
            style={{ display: "block", width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            {...register("password", {
              required: "Por favor, ingrese su contraseña.",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres.",
              },
              onBlur: handlePasswordValidation,
            })}
            style={{ display: "block", width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
        </label>
        <label>
          Repetir Contraseña:
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Por favor, repita su contraseña.",
              onBlur: handlePasswordValidation,
            })}
            style={{ display: "block", width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
          {errors.confirmPassword && <span style={{ color: "red" }}>{errors.confirmPassword.message}</span>}
        </label>
        <label>
          Comunidad Autónoma:
          <select
            {...register("community", {
              required: "Por favor, seleccione una comunidad autónoma.",
            })}
            style={{ display: "block", width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          >
            <option value="">Seleccione...</option>
            {comunidadesAutonomas.map((community) => (
              <option key={community} value={community}>
                {community}
              </option>
            ))}
          </select>
          {errors.community && <span style={{ color: "red" }}>{errors.community.message}</span>}
        </label>
        {watch("community") && (
          <label>
            Ciudad:
            <select
              {...register("city", {
                required: "Por favor, seleccione una ciudad.",
              })}
              style={{ display: "block", width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            >
              <option value="">Seleccione...</option>
              {citiesByCommunity[watch("community")].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <span style={{ color: "red" }}>{errors.city.message}</span>}
          </label>
        )}
        <label>
          Género:
          <select
            {...register("gender", {
              required: "Por favor, seleccione su género.",
            })}
            style={{ display: "block", width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          >
            <option value="">Seleccione...</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
          {errors.gender && <span style={{ color: "red" }}>{errors.gender.message}</span>}
        </label>
        <label>
          <input
            type="checkbox"
            {...register("termsAccepted", {
              required: "Debe aceptar los términos y condiciones.",
            })}
            style={{ marginRight: "0.5rem" }}
          />
          Acepto los términos y condiciones
        </label>
        {errors.termsAccepted && <span style={{ color: "red" }}>{errors.termsAccepted.message}</span>}
        <button type="submit" style={{ padding: "0.5rem", backgroundColor: "#646cff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Enviar
        </button>
      </form>
      <div style={{ marginTop: "2rem" }}>
        <h2>Valores:</h2>
        <pre>{JSON.stringify({ values: watch() }, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ReactHookForm;

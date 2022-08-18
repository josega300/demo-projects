// Componentes no controlados

const Form = () => {
    const formRef = React.useRef();
    function handleSubmit(evt) {
      evt.preventDefault();
      /*
          1. Usamos FormData para obtener la información
          2. FormData requiere la referencia del DOM,
             gracias al REF API podemos pasar esa referencia
          3. Finalmente obtenemos los datos serializados
        */
      const formData = new FormData(formRef.current);
      const values = Object.fromEntries(formData);
      // Aquí puedes usar values para enviar la información
    }
    return (
      <form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }

  ReactDOM.render(
	<Form />,
	document.getElementById('root')
	);
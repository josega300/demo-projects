const greeting = 'hola - React!!!';



const titulo = 'Login Sonia';
const usuario = 'Nombre Usuario logueado';
//const element =  <h1>{greeting}</h1>


const Element = () => {

    const [count, setCount] = React.useState(0)

	// será la responsable de actualizar el state desde el hijo, 
    const handleClick = e => setCount(count +1)

	const handleClickButton = e => {
		return (
			alert("hola Mundo")
		)
	}

	//handleClick como un prop con el mismo nombre a nuestro componente Button
    return (
        <React.Fragment>
            <h1>{greeting}{count}</h1>
            <Button handleClick={handleClick} text="click me"/>
            <br/>
			<h1>{usuario}</h1>
            <br/>
			<h1>Login SONIA</h1>
			<br/>
			<p>Usuario</p>
			<Input />
			<p>Password</p>
			<Input />
			<br/>
			<br/>
			<BotonInput handleClickButton={handleClickButton} />

        </React.Fragment>
    )
}

const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const BotonInput = ({handleClickButton}) => {
	return (
		<button onClick={handleClickButton}>Enviar</button>
	)
}

const Input = () => {
	return (
			<input type="text" name=""></input> 
	)
}

ReactDOM.render(
	<Element />,
	document.getElementById('root')
	);
const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = ( props ) => {

    console.log(props);


    return (
        <>
            <h1>{ title }</h1>
            {/*<code>{ JSON.stringify(newMessage) }</code>*/}
            <p>Soy otro mensaje</p>
        </>
    );
}
const MyListComponent = () => {

    const numbers = [1, 2, 3, 3, 5, 6, 7, 8];
    // let numbersList = [];

    // for (let num of numbers) {
    //     numbersList.push(<li>{num}</li>);
    // }

    // numbers.forEach(num => {
    //     numbersList.push(<li>{num}</li>);
    // })

    // numbersList = numbers.map(num => <li>{num}</li>);

    return (
        <div>
            <h1>Rendering Lists</h1>
            <ul>
                {numbers.map((num, index) => <li key={index}>{num}</li>)}
            </ul>
            <ul>
                {numbers.map((num, index) => <li key={index}>{num}</li>)}
            </ul>
        </div>
    )
}

export default MyListComponent;
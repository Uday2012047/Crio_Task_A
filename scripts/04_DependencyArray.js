const ParentComponent = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = React.useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, [setCount]);
    return React.createElement('div', null,
        React.createElement('h1', null, 'Parent Component'),
        React.createElement('p', null, 'Count: ', count),
        React.createElement(ChildComponent, { handleClick: handleClick })
    );
};

// this gets rerendered beacuse the setcount fucntion doesnt change


const ChildComponent = React.memo(({ handleClick }) => {
    console.log('Child Component Rendered');

    return React.createElement('div', null,
        React.createElement('h2', null, 'Child Component'),
        React.createElement('button', { onClick: handleClick }, 'Increase Count')
    );
});


ReactDOM.render(React.createElement(ParentComponent), document.getElementById('root'));
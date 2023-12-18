const App = ()=>{
    return(
        <div>
            <Tweet username="Milosh"  name="Milo"  date="01.01.0001" message="Hello!"/>
            <Tweet username="M"  name="Milosh"  date="02.02.0002" message="Hi!"/>
            <Tweet username="Milo"  name="M"  date="03.03.0003" message="Hey!"/>
            <Tweet/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
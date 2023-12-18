const App = () =>(
    <div>
        <Person name="Sam" age="19" hobbies={["cooking", "flying"]}/>
        <Person name="MiloMiloMilo" age="18" hobbies={["eating", "hiking"]}/>
        <Person name="Milo" age="17" hobbies={["cooking"]}/>
        <Person name="Milosh" age="17" />
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))
const App = () =>{
  return(
    <div>
      <FirstComponant/>
      <NamedComponent name="Milo"/>
      <NamedComponent/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
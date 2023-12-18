const Person = ({name='No Name', age=0, hobbies=["no Hobbies"]})=>{
    console.log(name.length)
    return(
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {name.length<8? name: name.slice(0,6)}</p>
            <h3>{age>=18? 'please go vote!': 'you must be 18'}</h3>
            <h4>Hobbies</h4>
            <ul>{hobbies.map(h=>(<li>{h}</li>))}</ul>
        </div>
    )
}
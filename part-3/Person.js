/**Person function: requests age-eligible persons to vote  
 * contains name, age, and hobbies props
*/

function Person(name, age, hobbies){
   const voteMsg = age >= 18 ? "Please go vote!" : "You must be 18.";
   //REACT expects each mapped hobby to contain an immutable key
   const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>)

   return (
    <div>
        <ul>
            <li>Name: {name.slice(0, 6)}</li>
            <li>Age: {age}</li>
            <ul>
                Hobbies: {hobbiesLIs}
            </ul>
        </ul>
        <h3>{voteMsg}</h3>
    </div>
   );
}
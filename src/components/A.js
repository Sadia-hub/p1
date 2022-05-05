import B from "./B";
import UserContext from "./UserContext";

function A() {
    return (
      <div>
        <h1>A calls B</h1>
        
            <B />
        
      </div>
    );
  }

  
  
  export default A;
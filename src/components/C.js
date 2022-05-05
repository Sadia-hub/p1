import { JobConsumer } from './JobContext';
import {UserConsumer} from './UserContext'
function C() {
    return (
      <div>
          <h1>In C</h1>
          <UserConsumer>
              {
                  (user)=>{
                    return <JobConsumer>
                        {
                            (job)=>{
                                return<>
                                    <h1>I am {user} from User context and my job is {job} from Job Context</h1>
                                </>
                            }
                        }
                    </JobConsumer>
                  }
              }
          </UserConsumer>
        
      </div>
    );
  }
  
  export default C;
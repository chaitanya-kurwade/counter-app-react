import {PropTypes} from 'prop-types';

export default function CounterButton({by, incrementMethod,decrementMethod,resetMethod}) {
  
    // console.log(by);
  
    // function incrementCounterFunction() {
    //   // state[1](state[0]+1)
    //   // console.log(state[0])
    //   // console.log(state[1])
    // //   setCount(count + by);
    //   incrementMethod(by);
    //   // console.log(count);
    // }
  
    // function decrementCounterFunction() {
    // //   setCount(count - by);
    //   decrementMethod(by);
    // }
  
    // function resetCounterFunction(){
    //   setCount(count - count)
    // }
  
    return (
      <div className="CounterButton">
        
        <div>
          <button className="counterButton" 
              onClick={() => incrementMethod(by)}>
            +{by}
          </button>
          <button className="counterButton" 
                  onClick={() => decrementMethod(by)}>
            -{by}
          </button>
          <br />
  
          {/* <span className="count">{count}</span>
          <br /> */}
        </div>
      </div>     
    );
  }
  
  CounterButton.propTypes = {
    by: PropTypes.number
  }
  
  CounterButton.defaultProps = {
    by: 1
  }
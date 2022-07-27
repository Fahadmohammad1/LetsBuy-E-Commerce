// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from "../../counterSlice.js";
// import styles from "./Counter.module.css";

// const TestRedux = () => {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <div className={styles.row}>
//         <button
//           className={styles.button}
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//         <span className={styles.value}>{count}</span>
//         <button
//           className={styles.button}
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//       </div>
//       {/* omit additional rendering output here */}
//     </div>
//   );
// };

// export default TestRedux;

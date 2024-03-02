// export default (state, action) => {
//   switch (action.type) {
//     case "DeleteTransaction":
//       return{
//         ...state,
//         transactions:state.transactions.filter((transaction)=> transaction.id !== action.payload)
//       }
//     default:
//       return state;
//   }
// };



const AppReducer = (state, action) => {
  switch (action.type) {
    case "AddTransaction":
      return {
        ...state,
        transactions: [action.payload,...state.transactions]
       
      };
    case "DeleteTransaction":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;


export default function async({ dispatch }) {
	return (next) => (action) => {
    console.log(action.payload);
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload
      .then(function(response) {
        console.log('Chegou no request do middleware ', response);
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
	};
}
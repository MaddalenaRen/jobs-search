
export const SET_QUERY= "SET_QUERY";
export const SET_JOBS= "SET_JOBS";
export const ADD_TO_FAVORITES="ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES= "REMOVE_FROM_FAVORITES";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const setqueryAction=(value)=>{
    return{
        type: SET_QUERY,
        payload:value,

    }
};

export const setjobAction=(data)=>{
    return {
        type: SET_JOBS,
        payload: data,

    }
};

export const addtofavorites=(jobData)=>{
    return{
        type: ADD_TO_FAVORITES,
        payload: jobData,

    }
}

export  const removefromfavoritesAction= (i)=>{
    return{
 type: REMOVE_FROM_FAVORITES,
payload: i
    }
}

export const setLoadingAction=(isLoading)=>({
    type: SET_LOADING,
    payload: isLoading
});

export const setErrorAction=(hasError)=>({
    type: SET_ERROR,
    payload: hasError,
})


export const handleSubmitAction =() =>{
    return async (dispatch,getState)=> {
        try {
            dispatch(setLoadingAction(true));
      dispatch(setErrorAction(false));
            const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="
            const query=getState().jobs.query
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
              const { data } = await response.json();
              if (data.length === 0) {
                alert("Nessun risultato trovato ");
              }
              dispatch(setjobAction(data));
            } else {
              alert("Error fetching results");
            }
          } catch (error) {
            console.log(error);
            dispatch(setErrorAction(true));

        } finally {
            dispatch(setLoadingAction(false));
        }
    }
}

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useEffectFetch = (action) => {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.auth.isLoggedIn);

    useEffect(() => {
        if(isLogin) {
            dispatch(action);
        }
    },[isLogin,dispatch])
    
};

export default useEffectFetch;
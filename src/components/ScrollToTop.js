import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//this function enables automatic scroll to top of page upon page/link navigation

function ScrollToTop () {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'auto'});
    }, [pathname]);

    return null;

}

export default ScrollToTop
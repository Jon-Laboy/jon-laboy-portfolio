//react-intersection-observer - fires event when element is in view 
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'

export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.3});
    // view ? controls.start("show") : controls.start("hidden");
    if(view) {
        controls.start("show")
    }else {
        controls.start("hidden")
    }

    return [element, controls]
}


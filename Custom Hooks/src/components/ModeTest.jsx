import React, { useEffect } from 'react'

const ModeTest = (ref, handler) => {

    useEffect(() => {
        function listener(e) {
            if (!ref.current || ref.current.contains(e.target)) {
                return
            }
            handler(e);
        }
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
        }

    }, [handler, ref]);

}

export default ModeTest

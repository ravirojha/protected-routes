const Util = {
    sleep: (millis: number) => new Promise((resolve => setTimeout(resolve, millis)))
}

export default Util;
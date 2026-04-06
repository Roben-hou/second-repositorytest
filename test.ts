type Logfunc = () => void
const f1: Logfunc = () => {
    return 11;
}//类型声明限制函数为void时，typescript不会严格要求返回值为空

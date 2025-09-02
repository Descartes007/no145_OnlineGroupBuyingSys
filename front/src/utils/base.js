const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot86593/",
            name: "springboot86593",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot86593/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上团购系统设计与实现"
        } 
    }
}
export default base

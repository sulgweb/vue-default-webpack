import axios from "@/utils/http.js"

class Index{
  test(){
    return axios.get("http://baidu.com").then(res=>{
      console.log(res)
      return res
    })
  }
}

const index = new Index()
/* console.log("index", index.test())
console.log("index", index) */
export default index
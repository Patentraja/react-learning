const PhotoGallery=()=>{
const [data,setData]=useState([]);
const[count,setCount]=useState(0)
useEffect(()=>
axios.get("https://jasonplaceholder.typicode.com/users")

.then((res)=>{
console.log(res.data);
setData(res.data)
})
.catch()
},[count])
const add=()=>{

    setCount(count+1)
    setCount(count+1)
}
return <div id="parent">
{

data.map((ele)=><PhotoList image={ele.meail} title{ele.name} key=ele={ele.id}})
}
<p>{count}</p>
<button onClick={add}>Add</button>
</div>




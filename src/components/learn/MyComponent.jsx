import './style.css'

const MyComponent = () => {
  const ngocduong = {
    name: "NgocDuongDev",
    age: 23
  };
  return (
    <>
    <div> React & {JSON.stringify(ngocduong)}</div>
    <div className="child" 
     style={{ borderRadius:"10px" }}
    >child</div>
    </>
  )
}
export default MyComponent
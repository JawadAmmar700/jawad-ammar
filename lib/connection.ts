export const isOnline = async () => {
  try {
    const res = await fetch("https://google.com")
    return res.status === 200
  } catch (error) {
    return false
  }
}

export const html =
  "<html style='margin:0;padding:0;background:black;color:white;'><body><div style='width:100%;height:100%;display:flex;justify-content:center'><div style='margin-top:20px;display:flex;flex-direction:column;width:700px;align-items:center;'><img style='width:100px;height:100px;' src='https://cdn-icons-png.flaticon.com/512/4330/4330471.png' /><h1>server response</h1><h1>It seems you are not connected to the internet</h1><button style='width:200px;height:50px;padding:5px;border-radius:5px;border:1px solid #fff;cursor:pointer;'  onClick='window.location.reload();'>reload</button></div></div></body></html>"

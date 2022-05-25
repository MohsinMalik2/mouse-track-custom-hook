//Custom Hook always start with keyword use

function useMouse(initial_val){

    const [mouse , setMouse] = React.useState(initial_val);

    function handleMouseMovement(e){
        setMouse({x: e.clientX , y: e.clientY})
    }

    return{

        mouse,
        setMouse
    }

}

function movingObject(props){
    const {mouse, handlemouseMovement} = useMouse({x:0, y: 0});

    return (
        <div style={{
            backgroundColor: "red",
            width: "100vw",
            height: "100vh",
            border: '2px solid #000'
        }}
        onMouseMove={handlemouseMovement}
        >
            <div style={{
                backgroundColor: "red",
                width: "100vw",
                height: "100vh",
                position: 'relative',
                left: mouse.x > 1260? 1260 : mouse.x ,
                top: mouse.y == 0 ? 0 : mouse.y >=380 ? 120 : mouse.y - 305
                }}
            >
                     {/* Object here to trace  */}
                     
                    <img src="" alt="" />
            </div>


        </div>

    )
}
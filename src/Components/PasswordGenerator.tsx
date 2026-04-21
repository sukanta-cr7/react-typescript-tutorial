import { useState, useCallback, useEffect, useRef } from "react";


function PasswordGenerator(){
    const [length,setLength] = useState<number>(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [Password, setPassword] = useState("")
    
    //UseRef hook
    const passwordRef = useRef<HTMLInputElement>(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "~!@#$%^&*"

        for(let i=1; i<= length; i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)

    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPasswordToClipBoard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 10);
        window.navigator.clipboard.writeText(Password)
    }, [Password])

    useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])
    return(
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
                <h1 className="text-white text-center my-3">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input type="text" value={Password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordRef}/>
                    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipBoard}>Copy</button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input type="range" min={6} max={50} value={length} className="cursor-pointer" onChange={(e) => {setLength(parseInt(e.target.value))}} />
                        <label className="text-white">Length : {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={numberAllowed} id="numberAllowed" onChange={() => {setNumberAllowed((prev) => !prev)}} />
                        <label className="text-white">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={charAllowed} id="charAllowed" onChange={() => {setCharAllowed((prev) => !prev)}} />
                        <label className="text-white">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator;
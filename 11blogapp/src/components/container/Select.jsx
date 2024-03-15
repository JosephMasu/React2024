import React , {useId} from "react"


function Select({
    options,
    label,
    classname,
    ...props
}, ref){
    const id = useId
    return(
        <div className="w-full">
             {label && (
                    <label htmlFor={id}
                    className='inline-block mb-1 pl-1'>
                        {label}
                    </label>
            )}
            <select
            {...props}
            id={id}
            ref={ref}>
                {
                    options.map((option) => (
                        <option
                        key={option}
                        value={option}>
                        </option>
                    ))
                }
            </select>
        </div>
    )
}


export default React.forwardRef(Select)
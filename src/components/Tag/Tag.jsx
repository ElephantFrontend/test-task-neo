import css from "./Tag.module.css"

function Tag ({text, children}) {

    return (
        <>
            <div className={css['tag']}>
                {children}
                <span>{text}</span>
            </div>
        </>
    )
}

export default Tag

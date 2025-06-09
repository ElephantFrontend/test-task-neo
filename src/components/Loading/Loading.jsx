import css from "./Loading.module.css"

function Loading () {

    return (
        <>
            <div className={css['loading']}>
                <p>Loading...</p>
            </div>
        </>
    )
}

export default Loading
